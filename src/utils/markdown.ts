import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import rehypeExternalLinks from 'rehype-external-links';

const essaysDirectory = path.join(process.cwd(), 'src/app/essays');

export interface Essay {
  id: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
}

function generateExcerpt(content: string, maxLength: number = 160): string {
  // Remove HTML tags and markdown syntax
  const plainText = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\[([^\]]*)\]\([^\)]*\)/g, '$1') // Replace markdown links with just text
    .replace(/[\*_~`]/g, '') // Remove markdown formatting
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();

  // Get first sentence or truncate to maxLength
  const firstSentence = plainText.split(/[.!?]\s/)[0];
  if (firstSentence.length <= maxLength) {
    return firstSentence;
  }

  // Truncate to maxLength and add ellipsis
  return plainText.slice(0, maxLength).trim() + '...';
}

export async function getEssay(id: string): Promise<Essay | null> {
  try {
    const fullPath = path.join(essaysDirectory, `${id}.md`);
    if (!fs.existsSync(fullPath)) {
      console.warn(`Essay file not found: ${fullPath}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeExternalLinks, {
        target: '_blank',
        rel: ['noopener', 'noreferrer']
      })
      .use(rehypeStringify)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
    
    return {
      id,
      title: matterResult.data.title || id,
      date: matterResult.data.date || '',
      content: contentHtml,
      excerpt: generateExcerpt(matterResult.content),
    };
  } catch (error) {
    console.error(`Error processing essay ${id}:`, error);
    return null;
  }
}

export function getAllEssayIds(): string[] {
  try {
    if (!fs.existsSync(essaysDirectory)) {
      console.warn('Essays directory does not exist:', essaysDirectory);
      return [];
    }
    const fileNames = fs.readdirSync(essaysDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading essays directory:', error);
    return [];
  }
}
