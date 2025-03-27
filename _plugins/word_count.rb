module Jekyll
    module WordCount
      def word_count(input)
        return 0 if input.nil?
  
        # First, ensure content is rendered HTML if it's still Markdown
        input = Jekyll::Converters::Markdown::KramdownParser.new(Jekyll.configuration({})).convert(input) unless input.include?("<p")
  
        # Remove all HTML tags but keep the content inside
        plain = input.gsub(/<\/?[^>]*>/, ' ')
  
        # Replace HTML entities (e.g., &nbsp;) with spaces
        plain = plain.gsub(/&[a-z]+;/, ' ')
  
        # Normalize whitespace
        plain = plain.gsub(/\s+/, ' ').strip
  
        # Count words
        plain.split(' ').count
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::WordCount)
  