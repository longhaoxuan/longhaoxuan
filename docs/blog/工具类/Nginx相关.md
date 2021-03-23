# Nginx相关

## 屏蔽IP

1.根据下面命令查询IP访问次数
```awk '{print $1}' access.log |sort |uniq -c |sort -n```

2.添加屏蔽IP文件`blockip.conf`

```deny 60.10.116.48```

  - 屏蔽单个ip ```deny IP;``` 
  - 允许单个IP `allow IP;`
  - 屏蔽所有ip访问`deny all;`
  - 屏蔽IP段`deny 192.0.0.1/8`
    - /8是192.xxx.xxx.xxx
    - /16是192.123.xxx.xxx
    - /24是 192.234.123.xxx

3.nginx.conf配置文件中引入
```include blockip.conf;```

4.重启nginx

```/usr/local/nginx/nginx -s reload```

```systemctl restart nginx```


