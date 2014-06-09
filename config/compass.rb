# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
relative_assets = true

http_path = "/"
css_path = "assets/styles/css"
sass_path = "assets/styles/scss"

images_path = "assets/images"
images_dir = "assets/images"

fonts_path = "assets/fonts"
fonts_dir = "assets/fonts"

retina_ext = File.join(Dir.pwd, 'assets/styles/scss/extensions/retina')
require File.join(Dir.pwd, 'config/sass_extensions.rb')
add_import_path File.join(retina_ext, 'stylesheets')

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass .. scss && rm -rf sass && mv scss sass
