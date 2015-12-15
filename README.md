# nihao Ju!
This is an example project on how to run a web app with ju-mvc and ju-components

IMPORTANT NOTE: some of the dependencies aren't public yet, so you won't be able to install them.  We hope to make them available soon (:

## simple installation
Go to the project's root folder and run:

```bash
sudo npm install -g bower
cd resource
bower install
```

Then open the index.html file in your browser.

## docker installation
If you wish to run all the components examples locally, you'll need a webserver to avoid problems related web browser's policies for fetching resource files (like stylesheets and markup files) from your machine.

To make it easier for you to run the examples, we provide configuration for `docker` (https://docs.docker.com/) containers that can be installed using `docker-compose` (https://docs.docker.com/compose/).

Once you have both `docker` and `docker-compose` installed, you can follow these steps to run the example app:

```bash
# we'll clone the code into ~/nihao-ju folder
cd ~
git clone https://github.com/hulilabs/nihao-ju.git

# install bower if you don't have it installed already
sudo npm install -g bower

# install bower dependencies
cd ~/nihao-ju/resource
bower install

# start the web server
cd ~/nihao-ju
docker-compose pull
docker-compose up -d nginx
```

Then add `nihao-ju` to your hosts file (i.e. add `127.0.0.1 nihao-ju` to /etc/hosts file) open http://nihao-ju in your browser