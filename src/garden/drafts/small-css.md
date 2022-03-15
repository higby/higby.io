---
title:  "Reducing CSS Per Page"
date: 2022-02-06 00:05:06
tags: "programming"
---

<!-- https://www.tablesgenerator.com/markdown_tables# -->

| File               	| Original Size 	| PurgeCSS + cssnano Size 	| Reduction 	|
|-------------------:	|---------------	|-------------------------	|:----------	|
| garden/alquari/    	| 23.70kB       	| 20.50kB                 	| 14.48%    	|
| garden/favorites/  	| 12.40kB       	| 9.00kB                  	| 31.78%    	|
| garden/oscana/     	| 20.30kB       	| 17.50kB                 	| 14.81%    	|
| garden/pokemon/    	| 14.60kB       	| 11.30kB                 	| 25.48%    	|
| garden/short-url/  	| 20.50kB       	| 18.90kB                 	| 8.12%     	|
| garden/sliverdeck/ 	| 29.40kB       	| 26.20kB                 	| 11.51%    	|
| garden/small-css/  	| 14.60kB       	| 11.50kB                 	| 23.75%    	|
| ocd/               	| 13.00kB       	| 9.60kB                  	| 30.09%    	|
| paleontology/      	| 18.00kB       	| 14.80kB                 	| 19.51%    	|
| garden/            	| 16.40kB       	| 13.10kB                 	| 22.37%    	|
| humans.txt/        	| 19.10kB       	| 17.10kB                 	| 11.05%    	|
| resume/            	| 13.70kB       	| 10.30kB                 	| 28.33%    	|
| styleguide/        	| 17.00kB       	| 16.10kB                 	| 5.44%     	|
| 404.html           	| 12.40kB       	| 9.30kB                  	| 28.57%    	|
| index.html         	| 11.60kB       	| 7.80kB                  	| 39.18%    	|


| File               	| Raw   	| Removed via PurgeCSS  	| Removed via cssnano  	| Result  	|
|--------------------	|-------	|-----------------------	|---------------------	|---------	|
| garden/short-url/  	| 6169C 	| 1418C                 	| 125C                 	| 4626C   	|
| ocd/               	| 6169C 	| 2199C                 	| 1154C                	| 2816C   	|
| paleontology/      	| 6169C 	| 2069C                 	| 1154C                	| 2946C   	|
| garden/favorites/  	| 6169C 	| 2165C                 	| 1154C                	| 2850C   	|
| garden/alquari/    	| 6169C 	| 2035C                 	| 1151C                	| 2983C   	|
| garden/oscana/     	| 6169C 	| 1654C                 	| 1151C                	| 3364C   	|
| index.html         	| 6351C 	| 2635C                 	| 1151C                	| 2565C   	|
| resume/            	| 6934C 	| 2178C                 	| 1152C                	| 3604C   	|
| garden/pokemon/    	| 6608C 	| 2080C                 	| 1159C                	| 3369C   	|
| garden/sliverdeck/ 	| 6535C 	| 2073C                 	| 1185C                	| 3277C   	|
| humans.txt/        	| 6706C 	| 1867C                 	| 121C                 	| 4718C   	|
| garden/            	| 6845C 	| 2147C                 	| 1155C                	| 3543C   	|
| 404.html           	| 6396C 	| 1870C                 	| 1183C                	| 3343C   	|
| styleguide/        	| 6559C 	| 695C                  	| 186C                 	| 5678C   	|
