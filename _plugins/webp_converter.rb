require 'mini_magick'

module WebPConverter
  class Generator < Jekyll::Generator
    safe true
    priority :low

    def generate(site)
      # Convert images during Jekyll build
      image_extensions = ['.jpg', '.jpeg', '.png', '.tiff']
      
      Dir.glob('images/*').each do |image_path|
        next unless image_extensions.include?(File.extname(image_path).downcase)
        
        output_path = image_path.sub('images/', 'images_webp/').sub(/\.[^.]+$/, '.webp')
        
        # Ensure output directory exists
        FileUtils.mkdir_p(File.dirname(output_path))
        
        # Convert using MiniMagick
        image = MiniMagick::Image.open(image_path)
        image.format 'webp'
        image.quality 80
        image.write output_path
        
        puts "Converted #{image_path} to WebP"
      end
    end
  end
end
