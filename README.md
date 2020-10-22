# Mage2 Module Akin Canan

    ``akin/module-canan``

 - [Main Functionalities](#markdown-header-main-functionalities)
 - [Installation](#markdown-header-installation)
 - [Configuration](#markdown-header-configuration)
 - [Specifications](#markdown-header-specifications)
 - [Attributes](#markdown-header-attributes)


## Main Functionalities
This module add a cool game.

## Installation
\* = in production please use the `--keep-generated` option

### Type 1: Zip file

 - Unzip the zip file in `app/code/Akin`
 - Enable the module by running `php bin/magento module:enable Akin_Canan`
 - Apply database updates by running `php bin/magento setup:upgrade`\*
 - Flush the cache by running `php bin/magento cache:flush`

### Type 2: Composer

 - Please note this module is for test purposes only.
 - Make the module available in a composer repository for example:
    - private repository `repo.magento.com`
    - public repository `packagist.org`
    - public github repository as vcs
 - Add the composer repository to the configuration by running `composer config repositories.repo.magento.com composer https://repo.magento.com/`
 - Install the module composer by running `composer require akin/module-canan`
 - enable the module by running `php bin/magento module:enable Akin_Canan`
 - apply database updates by running `php bin/magento setup:upgrade`
 - Flush the cache by running `php bin/magento cache:flush`
 - Reflesh the static files by running `php bin/magento setup:static-content:deploy -f`
 - If page don't open, us by running `php bin/magento cache:clean && chmod 777 -R *`


## Configuration




## Specifications

 - Block
	- Html\Game > html/game.phtml


## Attributes



