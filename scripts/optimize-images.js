/**
 * Image Optimization Script
 * 
 * This script optimizes images in the public/media directory by:
 * 1. Converting PNG and JPG images to WebP format
 * 2. Creating responsive image sizes for different viewports
 * 
 * To run this script:
 * 1. Install required dependencies: npm install sharp glob
 * 2. Run: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const sharp = require('sharp');

// Configuration
const config = {
  // Source directories to process
  sourceDirs: [
    'public/media/logos',
    'public/media/products',
    'public/media/blogs'
  ],
  // Output quality for WebP (0-100)
  webpQuality: 80,
  // Responsive image sizes
  sizes: {
    small: 400,
    medium: 800,
    large: 1200
  },
  // Skip files that match these patterns
  skipPatterns: [
    // Add patterns to skip certain files if needed
    // e.g., 'logo.png' to skip the main logo
  ]
};

// Create WebP version of an image
async function convertToWebP(filePath) {
  const fileDir = path.dirname(filePath);
  const fileName = path.basename(filePath, path.extname(filePath));
  const outputPath = path.join(fileDir, `${fileName}.webp`);
  
  try {
    await sharp(filePath)
      .webp({ quality: config.webpQuality })
      .toFile(outputPath);
    
    console.log(`✅ Created WebP: ${outputPath}`);
    return outputPath;
  } catch (error) {
    console.error(`❌ Error converting ${filePath} to WebP:`, error);
    return null;
  }
}

// Create responsive versions of an image
async function createResponsiveImages(filePath) {
  const fileDir = path.dirname(filePath);
  const fileName = path.basename(filePath, path.extname(filePath));
  const ext = path.extname(filePath).toLowerCase();
  
  // Only process WebP, JPG, JPEG, and PNG files
  if (!['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }
  
  // Skip files that match skip patterns
  if (config.skipPatterns.some(pattern => filePath.includes(pattern))) {
    console.log(`⏭️ Skipping file (matched skip pattern): ${filePath}`);
    return;
  }
  
  try {
    const metadata = await sharp(filePath).metadata();
    
    // Only create responsive images for files larger than the smallest size
    if (metadata.width <= config.sizes.small) {
      console.log(`⏭️ Skipping responsive images for ${filePath} (too small)`);
      return;
    }
    
    // Create responsive versions
    for (const [size, width] of Object.entries(config.sizes)) {
      // Skip if original is smaller than target size
      if (metadata.width <= width) continue;
      
      const outputPath = path.join(fileDir, `${fileName}-${size}${ext}`);
      const outputWebP = path.join(fileDir, `${fileName}-${size}.webp`);
      
      // Create resized original format
      await sharp(filePath)
        .resize({ width, withoutEnlargement: true })
        .toFile(outputPath);
      
      // Create resized WebP
      await sharp(filePath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: config.webpQuality })
        .toFile(outputWebP);
      
      console.log(`✅ Created responsive image: ${outputPath} and ${outputWebP}`);
    }
  } catch (error) {
    console.error(`❌ Error creating responsive images for ${filePath}:`, error);
  }
}

// Process all images in the specified directories
async function processImages() {
  console.log('🔍 Starting image optimization...');
  
  for (const sourceDir of config.sourceDirs) {
    console.log(`\n📁 Processing directory: ${sourceDir}`);
    
    // Ensure the directory exists
    if (!fs.existsSync(sourceDir)) {
      console.warn(`⚠️ Directory does not exist: ${sourceDir}`);
      continue;
    }
    
    // Find all image files
    const imageFiles = glob.sync(`${sourceDir}/**/*.{png,jpg,jpeg}`, { nodir: true });
    
    if (imageFiles.length === 0) {
      console.log(`ℹ️ No images found in ${sourceDir}`);
      continue;
    }
    
    console.log(`🖼️ Found ${imageFiles.length} images to process`);
    
    // Process each image
    for (const filePath of imageFiles) {
      console.log(`\n🔄 Processing: ${filePath}`);
      
      // Convert to WebP
      const webpPath = await convertToWebP(filePath);
      
      // Create responsive versions
      if (webpPath) {
        await createResponsiveImages(filePath);
        await createResponsiveImages(webpPath);
      }
    }
  }
  
  console.log('\n✨ Image optimization complete!');
}

// Run the script
processImages().catch(error => {
  console.error('❌ Error processing images:', error);
  process.exit(1);
});