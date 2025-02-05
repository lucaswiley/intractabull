import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
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
