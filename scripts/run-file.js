#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get the filename from command line arguments
const filename = process.argv[2];

if (!filename) {
    console.error('❌ Error: Please provide a filename');
    console.log('📝 Usage: npm run start:file <filename>');
    console.log('📝 Example: npm run start:file 1_primitiveTypes');
    console.log('📝 Example: npm run start:file 2_instanceTypes');
    process.exit(1);
}

// Remove .js extension if provided, we'll add it
const cleanFilename = filename.replace(/\.js$/, '');

// Construct the path to the JavaScript file in lib folder
const jsFilePath = path.join('lib', `${cleanFilename}.js`);

// Check if the file exists
if (!fs.existsSync(jsFilePath)) {
    console.error(`❌ Error: File '${jsFilePath}' not found`);
    console.log('🔍 Available files in lib folder:');
    
    try {
        const libFiles = fs.readdirSync('lib').filter(file => file.endsWith('.js'));
        if (libFiles.length === 0) {
            console.log('   No JavaScript files found. Run "npm run build" first.');
        } else {
            libFiles.forEach(file => {
                const nameWithoutExt = file.replace('.js', '');
                console.log(`   📄 ${nameWithoutExt}`);
            });
        }
    } catch (error) {
        console.log('   lib folder not found. Run "npm run build" first.');
    }
    
    process.exit(1);
}

console.log(`🚀 Running: ${jsFilePath}`);
console.log(''.padEnd(50, '='));

// Execute the JavaScript file
const child = spawn('node', [jsFilePath], {
    stdio: 'inherit',
    shell: true
});

child.on('error', (error) => {
    console.error(`❌ Error executing file: ${error.message}`);
    process.exit(1);
});

child.on('close', (code) => {
    if (code !== 0) {
        console.error(`❌ Process exited with code ${code}`);
        process.exit(code);
    } else {
        console.log(''.padEnd(50, '='));
        console.log('✅ Execution completed successfully');
    }
});
