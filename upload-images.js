const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dikief0td',
  api_key: '614444966195143',
  api_secret: 'kp6_bVp1VHIxIW9sOiBf4L6ZQZU'
});

// Function to upload a single image
async function uploadImage(filePath, folder, publicId) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folder,
      public_id: publicId,
      resource_type: 'auto'
    });
    console.log(`Successfully uploaded ${filePath} to ${folder}/${publicId}`);
    console.log(`Public URL: ${result.secure_url}`);
    return result.secure_url;
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error);
    return null;
  }
}

// Function to upload all images from a directory
async function uploadDirectory(directory, cloudinaryFolder) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    if (file === 'placeholder.svg') continue; // Skip placeholder files
    
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isFile()) {
      // Remove file extension and special characters for public_id
      const publicId = path.basename(file, path.extname(file))
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '_');
      
      await uploadImage(filePath, cloudinaryFolder, publicId);
    }
  }
}

// Main function to upload all images
async function uploadAllImages() {
  // Upload profile image
  const profilePath = path.join(__dirname, 'public', 'profile', 'profile_compressed.jpg');
  if (fs.existsSync(profilePath)) {
    await uploadImage(profilePath, 'profile', 'profile');
  }

  // Upload certificates
  const certificatesPath = path.join(__dirname, 'public', 'certificates');
  if (fs.existsSync(certificatesPath)) {
    await uploadDirectory(certificatesPath, 'certificates');
  }

  // Upload projects
  const projectsPath = path.join(__dirname, 'public', 'projects');
  if (fs.existsSync(projectsPath)) {
    await uploadDirectory(projectsPath, 'projects');
  }
}

// Run the upload process
uploadAllImages()
  .then(() => console.log('All images uploaded successfully!'))
  .catch(error => console.error('Error uploading images:', error)); 