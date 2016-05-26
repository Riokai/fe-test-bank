#!/bin/bash

# 项目打包
npm run build

host="root@121.42.215.19"
serverDirname="/root/test-bank"

# ssh $host
# 复制发布目录到服务器
scp -rp dist $host:$serverDirname
