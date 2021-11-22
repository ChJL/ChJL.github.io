# DE case study 11/22/2021
This documentation describes my works in case study, and how to use it. Three essential tools: 1. Docker 2. Flask 3. SQL are chosen for implementation here. The methods for building Docker image and creating Docker container are available [here](#docker-image-and-container). The ways to query the data are shown [here](#query-usage). Also, they are corresponded to Four sub-question in Q2 (which I list the link [here](#four-query-process)). 

This directory is structured as follows:

    DE_dashmote
     .
     |
     |--- Dockerfile                    [used for create docker image]
     |
     |--- tripadvisor.db                [database file]
     |--- uber.db                       [database file]
     |
     |--- tripadvisor_outlet.json       [original data]
     |--- tripadvisor_reviews.json      [original data]
     |--- tripadvisor_user.json         [original data]
     |--- ubereats_menu.json            [original data]
     |--- ubereats_outlet.json          [original data]
     |
     |--- readme.md                     [documentation]
     |
     |--- creat_db.py                   [python script for creating database]
     |--- rest_api.py                   [python script for REST API]


## Docker Image and Container
- Following two db files should be generated before building docker image and container.
1. [tripadvisor.db](#)
2. [uber.db](#)
```
python create_db.py
```
- Step1: Build docker image by Dockerfile
```
docker image build -t image_rest .
```
- Step2: Create docker container (will automatically start once created, and then the data is queryable now)
```
docker run -d -p 80:8888 --name container_rest image_rest
```

- Step3: Start docker container ()
```
docker start container_rest
```

- Step(4): Stop docker container if you finish all query and process
```sh
docker stop container_rest
```

## Query Usage
### Four query process
- a. [GET outlets who sell certain brands](#get-outlets-who-sell-certain-brands)
- b. [GET a list of outlets in one specific source](l#get-a-list-of-outlets-that-have-a-presence-in-one-specific-source)
- c. [GET menu items above a certain price threshold](#get-menu-items-above-a-certain-price-threshold)
- d. [POST a new outlet](#post-a-new-outlet)
### before query
- If you want to query data from local terminal, you should install httpie by:
```python
pip install httpie
```

### GET outlets who sell certain brands:
- method1: open a local browser (e.g. Chrome), type your \[brand_name\] in:
```sh
http://0.0.0.0/uber/brands/[brand_name]
```
- method2: open a docker container CLI, type \[brand_name\] in:
```sh
http GET http://172.17.0.1/uber/brands/[brand_name]
```
- method3: open a local terminal, type \[brand_name\] in:
```sh
http GET http://0.0.0.0/uber/brands/[brand_name]
```

### GET a list of outlets that have a presence in one specific source
#### For Ubereat source:
- method1: browser
```sh
http://0.0.0.0/uber/outlet
```
- method2: docker container CLI
```sh
http GET http://172.17.0.1/uber/outlet
```
- method3: local terminal
```sh
http GET http://0.0.0.0/uber/outlet
```
#### For Tripadvisor source:
- method1: browser
```sh
http://0.0.0.0/tripadvisor/outlet
```
- method2: docker container CLI
```sh
http GET http://172.17.0.1/tripadvisor/outlet
```
- method3: local terminal
```sh
http GET http://0.0.0.0/tripadvisor/outlet
```

### GET menu items above a certain price threshold
- method1: browser, replace \[threshold_value\]
```sh
http://0.0.0.0/uber/threshold/[threshold_value]
```
- method2: docker container CLI
```sh
http GET http://172.17.0.1/uber/threshold/[threshold_value]
```
- method3: local terminal
```sh
http GET http://0.0.0.0/uber/threshold/[threshold_value]
```
- Note that all unique brands can be check by (browser method):
```sh
http://0.0.0.0/uber/brands
```

### POST a new outlet
#### For Ubereats
- method1: docker container CLI, replace all items of square brackets
```sh
http POST http://172.17.0.1/uber id_outlet=[outletID] name=[name] address=[address] country=[country] reviews_nr=[numbers of reviews]
```
For example:
```sh
http POST http://172.17.0.1/uber id_outlet=ID1 name=KFC address=Damrak87 country=Netherlands reviews_nr=5873
```
- method2: local terminal
```sh
http POST http://0.0.0.0/uber id_outlet=[outletID] name=[name] address=[address] country=[country] reviews_nr=[numbers of reviews]
```

#### For Tripadvisor
- method1: docker container CLI, replace all items of square brackets
```sh
http POST http://172.17.0.1/tripadvisor id_outlet=[outletID] name=[name] address=[address] country=[country] phone=[phone number] reviews_nr=[numbers of reviews]
```

- method2: local terminal
```sh
http POST http://0.0.0.0/tripadvisor id_outlet=[outletID] name=[name] address=[address] country=[country] phone=[phone number] reviews_nr=[numbers of reviews]
```