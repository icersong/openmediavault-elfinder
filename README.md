elFinder plugin for OpenMediaVault

## deploy elfinder

    $ cd /usr/share
    $ git clone https://github.com/icersong/elFinder elfinder
    $ ln -s /media /usr/share/elfinder/files
    $ mkdir /media/.trash
    $ mkdir /media/.trash/.tmb
    $ cd /usr/share/elfinder/php && ln -s connector.minimal.php-dist connector.minimal.php
    $ cd ~
    $ git clone https://github.com/icersong/openmediavault-elfinder
    $ cd openmediavault-elfinder
    $ ./usr/share/openmediavault/mkconf/nginx.d/90-elfinder
    $ ./usr/share/openmediavault/mkconf/php5fpm.d/90-elfinder
    $ systemctl restart php7.3
    $ systemctl restart nginx

## clean omv cache

    $ source /usr/share/openmediavault/scripts/helper-functions && omv_purge_internal_cache
