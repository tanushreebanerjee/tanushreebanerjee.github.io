require 'image_processing/mini_magick'
require 'fileutils'

namespace :images do
  desc 'Convert images to WebP'
  task :webp do
    source_dir = 'images'
    dest_dir = 'images_webp'
    
    FileUtils.mkdir_p(dest_dir)
    
    Dir.glob(File.join(source_dir, '**', '*.{jpg,jpeg,png,tiff}')).each do |image_path|
      output_path = image_path.sub(source_dir, dest_dir).sub(/\.[^.]+$/, '.webp')
      
      FileUtils.mkdir_p(File.dirname(output_path))
      
      ImageProcessing::MiniMagick
        .source(image_path)
        .convert('webp')
        .quality(80)
        .destination(output_path)
        .call
      
      puts "Converted #{image_path} to WebP"
    end
  end

  desc 'Resize and optimize images'
  task :optimize do
    source_dir = 'images'
    resized_dir = 'images_resized'
    
    FileUtils.mkdir_p(resized_dir)
    
    Dir.glob(File.join(source_dir, '**', '*.{jpg,jpeg,png,tiff}')).each do |image_path|
      output_path = image_path.sub(source_dir, resized_dir)
      
      FileUtils.mkdir_p(File.dirname(output_path))
      
      ImageProcessing::MiniMagick
        .source(image_path)
        .resize_to_limit(1200, 1200)
        .quality(85)
        .strip
        .destination(output_path)
        .call
      
      puts "Optimized #{image_path}"
    end
  end
end

# Combined task to run both conversions
desc 'Process all images'
task images: ['images:optimize', 'images:webp']
