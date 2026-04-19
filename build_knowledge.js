import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const datasetDir = path.join(__dirname, 'dataset', 'Extracted Text')
const outputFile = path.join(__dirname, 'src', 'chatbotKnowledge.json')

function buildDataset() {
  console.log('Building chatbot knowledge base from dataset...')
  const files = fs.readdirSync(datasetDir).filter(f => f.endsWith('.txt'))
  
  const entries = []
  
  for (const file of files) {
    const filePath = path.join(datasetDir, file)
    let content = fs.readFileSync(filePath, 'utf-8')
    
    // Clean up content: replace multiple newlines/spaces with single space
    content = content.replace(/\s+/g, ' ').trim()
    
    // Extract key parts for search (first 600 chars or until a specific section)
    const snippet = content.substring(0, 600)
    
    entries.push({
      id: file,
      text: snippet
    })
  }

  fs.writeFileSync(outputFile, JSON.stringify(entries, null, 2))
  console.log(`Successfully built knowledge base with ${entries.length} entries at ${outputFile}`)
}

buildDataset()
