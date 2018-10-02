#!/bin/bash

find . -name "*.txt"|while read fname; do

 echo "$fname"

 NEW_FNAME=`echo $fname | sed "s/\.\///g"`

 NEW_FNAME=`echo $NEW_FNAME | sed "s/_BARRA_/\//g"`

 NEW_FNAME=`echo $NEW_FNAME | sed "s/.txt/.pt.md/g"`

 echo $NEW_FNAME

cp -n "$fname" "/git/eosdocs.io/PublicWebsite/content/$NEW_FNAME"

done
