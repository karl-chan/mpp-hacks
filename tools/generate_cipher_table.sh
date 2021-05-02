#!/usr/bin/env bash

confusables=$(curl 'http://www.unicode.org/Public/security/latest/confusables.txt')

for ch in {a..z}; do
  uch=$(echo $ch | tr '[:lower:]' '[:upper:]')
  variations=$(echo "$confusables" | grep -E '^.{4} ;' | grep "→ LATIN SMALL LETTER $uch\s#" | cut -d';' -f1 | awk '{print $1}')
  while IFS='\n' read -r v; do
    if [ ! -z $v ]; then
        echo -n "'";
        echo -n '\';
        echo "u$v': '$ch',"
    fi
  done <<< "$variations"
done

for ch in {A..Z}; do
  variations=$(echo "$confusables" | grep -E '^.{4} ;' | grep "→ LATIN CAPITAL LETTER $ch\s#" | cut -d';' -f1 | awk '{print $1}')
  while IFS='\n' read -r v; do
    if [ ! -z $v ]; then
        echo -n "'";
        echo -n '\';
        echo "u$v': '$ch',"
    fi
  done <<< "$variations"
done

variations=$(echo "$confusables" | grep '0020 ;' | cut -d';' -f1 | awk '{print $1}')
while IFS='\n' read -r v; do
    if [ ! -z $v ]; then
        echo -n "'";
        echo -n '\';
        echo "u$v': ' ',"
    fi
done <<< "$variations"