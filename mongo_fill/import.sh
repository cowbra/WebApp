#! /bin/bash

mongoimport --host mongo-webapp --db paris-films --collection locations --type json --file /mongo_fill/lieux-de-tournage-a-paris.json --jsonArray