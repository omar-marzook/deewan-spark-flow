import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Get the directory path of the current module
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// The project root is one level up from the server directory
export const root = `${__dirname}/..`