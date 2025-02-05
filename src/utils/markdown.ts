import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const essaysDirectory = path.join(process.cwd(), 'src/app/essays');

export interface Essay {
  id: string;
  title: string;
  date: string;
  content: string;
}

export async function getEssay(id: string): Promise<Essay> {
  const fullPath = path.join(essaysDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  
  return {
    id,
    title: matterResult.data.title || id,
    date: matterResult.data.date || '',
    content: contentHtml,
  };
}

export function getAllEssayIds(): string[] {
  const fileNames = fs.readdirSync(essaysDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}
