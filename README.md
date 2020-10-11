elFinder plugin for OpenMediaVault

## deploy elfinder

    $ wget https://github.com/icersong/elFinder/archive/master.zip -O elfinder.zip
    $ unzip elfinder.zip
    $ mv elFinder-master /usr/share/elfinder
    $ cp -f /usr/share/elfinder/php/connector.minimal.php-dist \
        /usr/share/elfinder/php/connector.minimal.php
    $ ln -s /media /usr/share/elfinder/files
    $ mkdir /media/.trash
    $ mkdir /media/.trash/.tmb
    $ chown -R www-data:www-data /media/.trash

    $ wget https://github.com/icersong/openmediavault-elfinder/archive/master.zip \
        -O openmediavault-elfinder.zip
    $ unzip openmediavault-elfinder.zip
    $ cd openmediavault-elfinder-master
    $ mkdir /var/www/openmediavault/js/omv/module/admin/service/elfinder
    $ cp var/www/openmediavault/js/omv/module/admin/service/elfinder/Elfinder.js \
        /var/www/openmediavault/js/omv/module/admin/service/elfinder/
    $ cp var/www/openmediavault/images/elfinder.* /var/www/openmediavault/images/
    $ ./usr/share/openmediavault/mkconf/nginx.d/90-elfinder
    $ ./usr/share/openmediavault/mkconf/php5fpm.d/90-elfinder
    $ systemctl restart php7.3-fpm.service
    $ systemctl restart nginx.service

## clean omv cache

    $ source /usr/share/openmediavault/scripts/helper-functions && omv_purge_internal_cache
