db = {
    DBInstances: [
    /* 1 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "devqapostgress",
      "Region": "us-east-1",
      "AllocatedStorage": 80,
      "AvailabilityZone": "us-east-1a",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:devqapostgress",
      "DBInstanceClass": "db.m5.xlarge",
      "DBInstanceStatus": "available",
      "DBName": "devqadb",
      "DBSecurityGroups": [],
      "DBSubnetGroup": {
        "DBSubnetGroupName": "default-vpc-0e9d1369",
        "DBSubnetGroupDescription": "Created from the RDS Management Console",
        "VpcId": "vpc-0e9d1369",
        "SubnetGroupStatus": "Complete",
        "Subnets": [
          {
            "SubnetIdentifier": "subnet-ee686ed3",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1e"
            },
            "SubnetStatus": "Active"
          },
          {
            "SubnetIdentifier": "subnet-74270f2c",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1a"
            },
            "SubnetStatus": "Active"
          }
        ]
      },
      "DbInstancePort": 0,
      "DbiResourceId": "db-3V35TETHJX7YEDLBNFV24HQ6ZQ",
      "Endpoint": {
        "Address": "devqapostgress.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 5432,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "postgres",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "gp2",
      "Tags": [
        {
          "Key": "workload-type",
          "Value": "other"
        }
      ],
      "type": "DBInstances",
      "security": "high",
      "securityFindings": [
        {
          "Message": "RDS instance is not encrypted at rest",
          "Action": "Enable storage encryption at rest for the instance",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "high"
        },
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 1,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 2 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "mssql-ent-demodb",
      "Region": "us-east-1",
      "AllocatedStorage": 500,
      "AvailabilityZone": "us-east-1a",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:mssql-ent-demodb",
      "DBInstanceClass": "db.m5.xlarge",
      "DBInstanceStatus": "available",
      "DBName": null,
      "DBSecurityGroups": [],
      "DBSubnetGroup": {
        "DBSubnetGroupName": "default-vpc-0e9d1369",
        "DBSubnetGroupDescription": "Created from the RDS Management Console",
        "VpcId": "vpc-0e9d1369",
        "SubnetGroupStatus": "Complete",
        "Subnets": [
          {
            "SubnetIdentifier": "subnet-ee686ed3",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1e"
            },
            "SubnetStatus": "Active"
          },
          {
            "SubnetIdentifier": "subnet-74270f2c",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1a"
            },
            "SubnetStatus": "Active"
          }
        ]
      },
      "DbInstancePort": 0,
      "DbiResourceId": "db-7TNGQEIKO5GWDU6Q5NIFNU3N3U",
      "Endpoint": {
        "Address": "mssql-ent-demodb.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 1433,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "sqlserver-ee",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "gp2",
      "Tags": [
        {
          "Key": "ForSales Team",
          "Value": "Michael Eisterer"
        },
        {
          "Key": "COSWAT",
          "Value": "1364"
        }
      ],
      "type": "DBInstances",
      "security": "medium",
      "securityFindings": [
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 0,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 3 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "mysqlqa2",
      "Region": "us-east-1",
      "AllocatedStorage": 500,
      "AvailabilityZone": "us-east-1d",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:mysqlqa2",
      "DBInstanceClass": "db.m1.large",
      "DBInstanceStatus": "available",
      "DBName": "mysqlqa",
      "DBSecurityGroups": [
        {
          "DBSecurityGroupName": "canary-new-ijcc",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-uat-groundplexrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "dockerjccnodes",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "lasvegas",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "perfxlpodnodes",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sqlservsecgroup",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-canary-groundplexrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-all-ux-groundplexrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "azure",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-azure-serversrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "prodv2nat",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "qa-mysql-sec-group",
          "Status": "active"
        }
      ],
      "DBSubnetGroup": null,
      "DbInstancePort": 0,
      "DbiResourceId": "db-HLIB7V6MU5FCSIBTEAG5IEYFIU",
      "Endpoint": {
        "Address": "mysqlqa2.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 3306,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "mysql",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "gp2",
      "Tags": [],
      "type": "DBInstances",
      "security": "high",
      "securityFindings": [
        {
          "Message": "RDS instance is not encrypted at rest",
          "Action": "Enable storage encryption at rest for the instance",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "high"
        },
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 1,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 4 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "oraclewithssltcps",
      "Region": "us-east-1",
      "AllocatedStorage": 20,
      "AvailabilityZone": "us-east-1c",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:oraclewithssltcps",
      "DBInstanceClass": "db.t2.large",
      "DBInstanceStatus": "available",
      "DBName": "ORCL",
      "DBSecurityGroups": [],
      "DBSubnetGroup": {
        "DBSubnetGroupName": "default-vpc-963c6cf0",
        "DBSubnetGroupDescription": "Created from the RDS Management Console",
        "VpcId": "vpc-963c6cf0",
        "SubnetGroupStatus": "Complete",
        "Subnets": [
          {
            "SubnetIdentifier": "subnet-3128526c",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1a"
            },
            "SubnetStatus": "Active"
          },
          {
            "SubnetIdentifier": "subnet-921e58bd",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1c"
            },
            "SubnetStatus": "Active"
          },
          {
            "SubnetIdentifier": "subnet-a3bc848e",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1c"
            },
            "SubnetStatus": "Active"
          }
        ]
      },
      "DbInstancePort": 0,
      "DbiResourceId": "db-5QMG3EUUXYTOJVPYXGYJYVQPLQ",
      "Endpoint": {
        "Address": "oraclewithssltcps.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 1521,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "oracle-se1",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "gp2",
      "Tags": [
        {
          "Key": "workload-type",
          "Value": "other"
        }
      ],
      "type": "DBInstances",
      "security": "high",
      "securityFindings": [
        {
          "Message": "RDS instance is not encrypted at rest",
          "Action": "Enable storage encryption at rest for the instance",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "high"
        },
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 1,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 5 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "oratestdb2",
      "Region": "us-east-1",
      "AllocatedStorage": 300,
      "AvailabilityZone": "us-east-1e",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:oratestdb2",
      "DBInstanceClass": "db.m3.large",
      "DBInstanceStatus": "available",
      "DBName": "TESTDB",
      "DBSecurityGroups": [
        {
          "DBSecurityGroupName": "oracle-db-group",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sqlservsecgroup1",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-uat-groundplexrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-canary-groundplexrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-all-ux-groundplexrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sqlservsecgroup",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-azure-serversrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "lasvegas",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "perfxlpodnodes",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "prodv2nat",
          "Status": "active"
        }
      ],
      "DBSubnetGroup": null,
      "DbInstancePort": 0,
      "DbiResourceId": "db-2KMOMUPMLVN7QMJMPKPWY2E7QM",
      "Endpoint": {
        "Address": "oratestdb2.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 1521,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "oracle-se",
      "Iops": null,
      "Latest": true,
      "MultiAZ": true,
      "SecondaryAvailabilityZone": "us-east-1c",
      "StorageType": "standard",
      "Tags": [],
      "type": "DBInstances",
      "security": "high",
      "securityFindings": [
        {
          "Message": "RDS instance is not encrypted at rest",
          "Action": "Enable storage encryption at rest for the instance",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "high"
        },
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 1,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 6 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "postgrestestdbzq",
      "Region": "us-east-1",
      "AllocatedStorage": 100,
      "AvailabilityZone": "us-east-1a",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:postgrestestdbzq",
      "DBInstanceClass": "db.m5.xlarge",
      "DBInstanceStatus": "available",
      "DBName": null,
      "DBSecurityGroups": [],
      "DBSubnetGroup": {
        "DBSubnetGroupName": "default-vpc-0e9d1369",
        "DBSubnetGroupDescription": "Created from the RDS Management Console",
        "VpcId": "vpc-0e9d1369",
        "SubnetGroupStatus": "Complete",
        "Subnets": [
          {
            "SubnetIdentifier": "subnet-ee686ed3",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1e"
            },
            "SubnetStatus": "Active"
          },
          {
            "SubnetIdentifier": "subnet-74270f2c",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1a"
            },
            "SubnetStatus": "Active"
          }
        ]
      },
      "DbInstancePort": 0,
      "DbiResourceId": "db-FYQUUXJEST3PT277QQKDJ4CCPU",
      "Endpoint": {
        "Address": "postgrestestdbzq.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 5432,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "postgres",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "gp2",
      "Tags": [],
      "type": "DBInstances",
      "security": "medium",
      "securityFindings": [
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 0,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 7 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "sales-mysql",
      "Region": "us-east-1",
      "AllocatedStorage": 30,
      "AvailabilityZone": "us-east-1c",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:sales-mysql",
      "DBInstanceClass": "db.m1.medium",
      "DBInstanceStatus": "available",
      "DBName": "salesmysql",
      "DBSecurityGroups": [
        {
          "DBSecurityGroupName": "sqlservsecgroup1",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "prodv2nat",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sqlservsecgroup",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "perfxlpodnodes",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "datacenterip",
          "Status": "active"
        }
      ],
      "DBSubnetGroup": null,
      "DbInstancePort": 0,
      "DbiResourceId": "db-J6XMG52DWNFEBFYZQ6DWPVYNMU",
      "Endpoint": {
        "Address": "sales-mysql.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 3306,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "mysql",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "standard",
      "Tags": [
        {
          "Key": "workload-type",
          "Value": "other"
        }
      ],
      "type": "DBInstances",
      "security": "high",
      "securityFindings": [
        {
          "Message": "RDS instance is not encrypted at rest",
          "Action": "Enable storage encryption at rest for the instance",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "high"
        },
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 1,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 8 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "sales-oracle",
      "Region": "us-east-1",
      "AllocatedStorage": 1400,
      "AvailabilityZone": "us-east-1a",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:sales-oracle",
      "DBInstanceClass": "db.m3.medium",
      "DBInstanceStatus": "available",
      "DBName": "SALESORA",
      "DBSecurityGroups": [
        {
          "DBSecurityGroupName": "sec-azure-serversrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "prodv2nat",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sqlservsecgroup",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-uat-groundplexrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-canary-groundplexrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-all-ux-groundplexrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sqlservsecgroup1",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "datacenterip",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "perfxlpodnodes",
          "Status": "active"
        }
      ],
      "DBSubnetGroup": null,
      "DbInstancePort": 0,
      "DbiResourceId": "db-5LBKRQ6YBZXKCM6RJHS73EADKA",
      "Endpoint": {
        "Address": "sales-oracle.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 1521,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "oracle-ee",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "standard",
      "Tags": [
        {
          "Key": "workload-type",
          "Value": "other"
        }
      ],
      "type": "DBInstances",
      "security": "high",
      "securityFindings": [
        {
          "Message": "RDS instance is not encrypted at rest",
          "Action": "Enable storage encryption at rest for the instance",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "high"
        },
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 1,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 9 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "sales-postgresql",
      "Region": "us-east-1",
      "AllocatedStorage": 30,
      "AvailabilityZone": "us-east-1d",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:sales-postgresql",
      "DBInstanceClass": "db.m1.medium",
      "DBInstanceStatus": "available",
      "DBName": "salespostgresql",
      "DBSecurityGroups": [
        {
          "DBSecurityGroupName": "prodv2nat",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "perfxlpodnodes",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sqlservsecgroup",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sqlservsecgroup1",
          "Status": "active"
        }
      ],
      "DBSubnetGroup": null,
      "DbInstancePort": 0,
      "DbiResourceId": "db-BHIJLD7O5YZRL4WRLXPLI7I26Q",
      "Endpoint": {
        "Address": "sales-postgresql.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 5432,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "postgres",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "standard",
      "Tags": [
        {
          "Key": "workload-type",
          "Value": "other"
        }
      ],
      "type": "DBInstances",
      "security": "high",
      "securityFindings": [
        {
          "Message": "RDS instance is not encrypted at rest",
          "Action": "Enable storage encryption at rest for the instance",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "high"
        },
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 1,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 10 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "sales-sqlserver",
      "Region": "us-east-1",
      "AllocatedStorage": 500,
      "AvailabilityZone": "us-east-1e",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:sales-sqlserver",
      "DBInstanceClass": "db.m3.xlarge",
      "DBInstanceStatus": "available",
      "DBName": null,
      "DBSecurityGroups": [
        {
          "DBSecurityGroupName": "new-dev-vpn-sg",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "perfxlpodnodes",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "datacenterip",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sqlservsecgroup",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "prodv2nat",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sqlservsecgroup1",
          "Status": "active"
        }
      ],
      "DBSubnetGroup": null,
      "DbInstancePort": 0,
      "DbiResourceId": "db-WAX3F4RE4BAMUFK7M2RE44DSFA",
      "Endpoint": {
        "Address": "sales-sqlserver.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 1433,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "sqlserver-se",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "standard",
      "Tags": [],
      "type": "DBInstances",
      "security": "high",
      "securityFindings": [
        {
          "Message": "RDS instance is not encrypted at rest",
          "Action": "Enable storage encryption at rest for the instance",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "high"
        },
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 1,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 11 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "snapaurorapostgres",
      "Region": "us-east-1",
      "AllocatedStorage": 1,
      "AvailabilityZone": "us-east-1a",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:snapaurorapostgres",
      "DBInstanceClass": "db.r4.large",
      "DBInstanceStatus": "available",
      "DBName": "snaplogicdbpsql",
      "DBSecurityGroups": [],
      "DBSubnetGroup": {
        "DBSubnetGroupName": "default-vpc-0e9d1369",
        "DBSubnetGroupDescription": "Created from the RDS Management Console",
        "VpcId": "vpc-0e9d1369",
        "SubnetGroupStatus": "Complete",
        "Subnets": [
          {
            "SubnetIdentifier": "subnet-ee686ed3",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1e"
            },
            "SubnetStatus": "Active"
          },
          {
            "SubnetIdentifier": "subnet-74270f2c",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1a"
            },
            "SubnetStatus": "Active"
          }
        ]
      },
      "DbInstancePort": 0,
      "DbiResourceId": "db-RE5OTTWZLY7W3PLSW3E63PVV2I",
      "Endpoint": {
        "Address": "snapaurorapostgres.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 5432,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "aurora-postgresql",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "aurora",
      "Tags": [
        {
          "Key": "workload-type",
          "Value": "other"
        }
      ],
      "type": "DBInstances",
      "security": "high",
      "securityFindings": [
        {
          "Message": "RDS instance is not encrypted at rest",
          "Action": "Enable storage encryption at rest for the instance",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "high"
        },
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 1,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 12 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "snapaurorapostgres-us-east-1e",
      "Region": "us-east-1",
      "AllocatedStorage": 1,
      "AvailabilityZone": "us-east-1e",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:snapaurorapostgres-us-east-1e",
      "DBInstanceClass": "db.r4.large",
      "DBInstanceStatus": "available",
      "DBName": "snaplogicdbpsql",
      "DBSecurityGroups": [],
      "DBSubnetGroup": {
        "DBSubnetGroupName": "default-vpc-0e9d1369",
        "DBSubnetGroupDescription": "Created from the RDS Management Console",
        "VpcId": "vpc-0e9d1369",
        "SubnetGroupStatus": "Complete",
        "Subnets": [
          {
            "SubnetIdentifier": "subnet-ee686ed3",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1e"
            },
            "SubnetStatus": "Active"
          },
          {
            "SubnetIdentifier": "subnet-74270f2c",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1a"
            },
            "SubnetStatus": "Active"
          }
        ]
      },
      "DbInstancePort": 0,
      "DbiResourceId": "db-4SL6DUCAJ56ESQ7CUF3W6ITS3E",
      "Endpoint": {
        "Address": "snapaurorapostgres-us-east-1e.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 5432,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "aurora-postgresql",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "aurora",
      "Tags": [],
      "type": "DBInstances",
      "security": "high",
      "securityFindings": [
        {
          "Message": "RDS instance is not encrypted at rest",
          "Action": "Enable storage encryption at rest for the instance",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "high"
        },
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 1,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 13 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "snaplogicdb",
      "Region": "us-east-1",
      "AllocatedStorage": 1,
      "AvailabilityZone": "us-east-1a",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:snaplogicdb",
      "DBInstanceClass": "db.t2.medium",
      "DBInstanceStatus": "available",
      "DBName": "snaplogicdb",
      "DBSecurityGroups": [],
      "DBSubnetGroup": {
        "DBSubnetGroupName": "default-vpc-0e9d1369",
        "DBSubnetGroupDescription": "Created from the RDS Management Console",
        "VpcId": "vpc-0e9d1369",
        "SubnetGroupStatus": "Complete",
        "Subnets": [
          {
            "SubnetIdentifier": "subnet-ee686ed3",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1e"
            },
            "SubnetStatus": "Active"
          },
          {
            "SubnetIdentifier": "subnet-74270f2c",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1a"
            },
            "SubnetStatus": "Active"
          }
        ]
      },
      "DbInstancePort": 0,
      "DbiResourceId": "db-7A5KDAQ4U47MHI6AOX63TWGZCQ",
      "Endpoint": {
        "Address": "snaplogicdb.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 3306,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "aurora",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "aurora",
      "Tags": [
        {
          "Key": "workload-type",
          "Value": "other"
        }
      ],
      "type": "DBInstances",
      "security": "medium",
      "securityFindings": [
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 0,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 14 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "snaplogicdb-us-east-1e",
      "Region": "us-east-1",
      "AllocatedStorage": 1,
      "AvailabilityZone": "us-east-1e",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:snaplogicdb-us-east-1e",
      "DBInstanceClass": "db.t2.medium",
      "DBInstanceStatus": "available",
      "DBName": "snaplogicdb",
      "DBSecurityGroups": [],
      "DBSubnetGroup": {
        "DBSubnetGroupName": "default-vpc-0e9d1369",
        "DBSubnetGroupDescription": "Created from the RDS Management Console",
        "VpcId": "vpc-0e9d1369",
        "SubnetGroupStatus": "Complete",
        "Subnets": [
          {
            "SubnetIdentifier": "subnet-ee686ed3",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1e"
            },
            "SubnetStatus": "Active"
          },
          {
            "SubnetIdentifier": "subnet-74270f2c",
            "SubnetAvailabilityZone": {
              "Name": "us-east-1a"
            },
            "SubnetStatus": "Active"
          }
        ]
      },
      "DbInstancePort": 0,
      "DbiResourceId": "db-TOCHCI7YTVJM7KF47XRR44AILA",
      "Endpoint": {
        "Address": "snaplogicdb-us-east-1e.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 3306,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "aurora",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "aurora",
      "Tags": [],
      "type": "DBInstances",
      "security": "medium",
      "securityFindings": [
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 0,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 15 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "sqlservtest",
      "Region": "us-east-1",
      "AllocatedStorage": 20,
      "AvailabilityZone": "us-east-1c",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:sqlservtest",
      "DBInstanceClass": "db.m1.small",
      "DBInstanceStatus": "available",
      "DBName": null,
      "DBSecurityGroups": [
        {
          "DBSecurityGroupName": "sqlservsecgroup",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-canary-groundplexrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "prodv2nat",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "perfxlpodnodes",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-uat-groundplexrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-all-ux-groundplexrules",
          "Status": "active"
        }
      ],
      "DBSubnetGroup": null,
      "DbInstancePort": 0,
      "DbiResourceId": "db-6BR4Y4SANR2K7IFBLQ6JCOIURA",
      "Endpoint": {
        "Address": "sqlservtest.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 1433,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "sqlserver-ex",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "standard",
      "Tags": [],
      "type": "DBInstances",
      "security": "high",
      "securityFindings": [
        {
          "Message": "RDS instance is not encrypted at rest",
          "Action": "Enable storage encryption at rest for the instance",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "high"
        },
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 1,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 16 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "sqlservtestxl",
      "Region": "us-east-1",
      "AllocatedStorage": 200,
      "AvailabilityZone": "us-east-1e",
      "DBInstanceArn": "arn:aws:rds:us-east-1:740934760981:db:sqlservtestxl",
      "DBInstanceClass": "db.m3.medium",
      "DBInstanceStatus": "available",
      "DBName": null,
      "DBSecurityGroups": [
        {
          "DBSecurityGroupName": "new-dev-vpn-sg",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-uat-groundplexrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sqlservsecgroup",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "sec-canary-groundplexrules",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "prodv2nat",
          "Status": "active"
        },
        {
          "DBSecurityGroupName": "perfxlpodnodes",
          "Status": "active"
        }
      ],
      "DBSubnetGroup": null,
      "DbInstancePort": 0,
      "DbiResourceId": "db-AOPARSTHFJ5QYDXYS7EOTEZJKA",
      "Endpoint": {
        "Address": "sqlservtestxl.cwztruwzzvnq.us-east-1.rds.amazonaws.com",
        "Port": 1433,
        "HostedZoneId": "Z2R2ITUGPM61AM"
      },
      "Engine": "sqlserver-se",
      "Iops": null,
      "Latest": true,
      "MultiAZ": true,
      "SecondaryAvailabilityZone": "us-east-1c",
      "StorageType": "standard",
      "Tags": [
        {
          "Key": "Owner",
          "Value": "Danila/Drea"
        },
        {
          "Key": "Description",
          "Value": "Used by Eng/QA for testing. Everything on this DB can be wiped at any time."
        },
        {
          "Key": "Name",
          "Value": "SQLServer Test Instance"
        }
      ],
      "type": "DBInstances",
      "security": "high",
      "securityFindings": [
        {
          "Message": "RDS instance is not encrypted at rest",
          "Action": "Enable storage encryption at rest for the instance",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "high"
        },
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 1,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 17 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "test-oracle-rds",
      "Region": "us-west-1",
      "AllocatedStorage": 20,
      "AvailabilityZone": "us-west-1a",
      "DBInstanceArn": "arn:aws:rds:us-west-1:740934760981:db:test-oracle-rds",
      "DBInstanceClass": "db.m3.medium",
      "DBInstanceStatus": "available",
      "DBName": "ORCL",
      "DBSecurityGroups": [
        {
          "DBSecurityGroupName": "default",
          "Status": "active"
        }
      ],
      "DBSubnetGroup": null,
      "DbInstancePort": 0,
      "DbiResourceId": "db-ZSV47CLHBE2FKGVC42I7Y2EOC4",
      "Endpoint": {
        "Address": "test-oracle-rds.cqbcak1jamvo.us-west-1.rds.amazonaws.com",
        "Port": 1521,
        "HostedZoneId": "Z10WI91S59XXQN"
      },
      "Engine": "oracle-se1",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "standard",
      "Tags": [
        {
          "Key": "workload-type",
          "Value": "other"
        }
      ],
      "type": "DBInstances",
      "security": "high",
      "securityFindings": [
        {
          "Message": "RDS instance is not encrypted at rest",
          "Action": "Enable storage encryption at rest for the instance",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "high"
        },
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 1,
      "securityLow": 0,
      "securityMedium": 1
    },
    /* 18 */
    {
      "AccountId": 740934760981.0,
      "DBInstanceIdentifier": "postgressdemo",
      "Region": "us-west-2",
      "AllocatedStorage": 200,
      "AvailabilityZone": "us-west-2b",
      "DBInstanceArn": "arn:aws:rds:us-west-2:740934760981:db:postgressdemo",
      "DBInstanceClass": "db.m3.medium",
      "DBInstanceStatus": "available",
      "DBName": "snaplogicps",
      "DBSecurityGroups": [],
      "DBSubnetGroup": {
        "DBSubnetGroupName": "default-vpc-859235e0",
        "DBSubnetGroupDescription": "Created from the RDS Management Console",
        "VpcId": "vpc-859235e0",
        "SubnetGroupStatus": "Complete",
        "Subnets": [
          {
            "SubnetIdentifier": "subnet-db259cbe",
            "SubnetAvailabilityZone": {
              "Name": "us-west-2a"
            },
            "SubnetStatus": "Active"
          },
          {
            "SubnetIdentifier": "subnet-db24d882",
            "SubnetAvailabilityZone": {
              "Name": "us-west-2c"
            },
            "SubnetStatus": "Active"
          },
          {
            "SubnetIdentifier": "subnet-d722fda0",
            "SubnetAvailabilityZone": {
              "Name": "us-west-2b"
            },
            "SubnetStatus": "Active"
          }
        ]
      },
      "DbInstancePort": 0,
      "DbiResourceId": "db-VHB42DOO2I4XTEVS6LEFOWNZXU",
      "Endpoint": {
        "Address": "postgressdemo.ctt3sfhmsgkw.us-west-2.rds.amazonaws.com",
        "Port": 5432,
        "HostedZoneId": "Z1PVIF0B656C1W"
      },
      "Engine": "postgres",
      "Iops": null,
      "Latest": true,
      "MultiAZ": false,
      "SecondaryAvailabilityZone": null,
      "StorageType": "gp2",
      "Tags": [
        {
          "Key": "workload-type",
          "Value": "other"
        }
      ],
      "type": "DBInstances",
      "security": "high",
      "securityFindings": [
        {
          "Message": "RDS instance is not encrypted at rest",
          "Action": "Enable storage encryption at rest for the instance",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "high"
        },
        {
          "Message": "RDS instance is publicly accessible",
          "Action": "Recommended to access Database instance privately",
          "Benchmark": [
            "all",
            "hipaa"
          ],
          "Severity": "medium"
        }
      ],
      "securityHigh": 1,
      "securityLow": 0,
      "securityMedium": 1
    }
  ]}

  mockData = {
    Vpcs: [
      /* 1 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-ff07169a",
        "CidrBlock": "10.0.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-4766a12e",
            "CidrBlock": "10.0.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "PS-EG"
          }
        ],
        "type": "Vpcs"
      },
      /* 2 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-d609c2b2",
        "CidrBlock": "10.0.0.0/28",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-c4f60ead",
            "CidrBlock": "10.0.0.0/28",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "OpenAM"
          }
        ],
        "type": "Vpcs"
      },
      /* 3 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-0e9d1369",
        "CidrBlock": "10.0.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-573a8b3e",
            "CidrBlock": "10.0.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "bluedata"
          }
        ],
        "type": "Vpcs"
      },
      /* 4 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-955f32ee",
        "CidrBlock": "172.110.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-2edab043",
            "CidrBlock": "172.110.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "SL_DEVQA_JCC_X00"
          }
        ],
        "type": "Vpcs"
      },
      /* 5 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-8ee872ea",
        "CidrBlock": "10.0.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-0c2adc65",
            "CidrBlock": "10.0.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "Hadoop"
          }
        ],
        "type": "Vpcs"
      },
      /* 6 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-ce5036a9",
        "CidrBlock": "10.0.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-1727ae7e",
            "CidrBlock": "10.0.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "Sonar"
          }
        ],
        "type": "Vpcs"
      },
      /* 7 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-e4bd2f80",
        "CidrBlock": "10.0.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-33f60c5a",
            "CidrBlock": "10.0.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "VPCClassicLink"
          }
        ],
        "type": "Vpcs"
      },
      /* 8 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-227a9946",
        "CidrBlock": "10.0.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-6679980f",
            "CidrBlock": "10.0.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "Dynamics"
          }
        ],
        "type": "Vpcs"
      },
      /* 9 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-963c6cf0",
        "CidrBlock": "172.19.2.0/24",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-93e2a6fb",
            "CidrBlock": "172.19.2.0/24",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "SL_USE_VPC_B51"
          }
        ],
        "type": "Vpcs"
      },
      /* 10 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-0e040df70dd54bb47",
        "CidrBlock": "192.168.200.0/24",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-0a6a662ec59de1562",
            "CidrBlock": "192.168.200.0/24",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "ProxyTesting"
          }
        ],
        "type": "Vpcs"
      },
      /* 11 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-9b5f10ff",
        "CidrBlock": "10.0.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-01ff0f68",
            "CidrBlock": "10.0.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "canary-testvpc"
          }
        ],
        "type": "Vpcs"
      },
      /* 12 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-6f3c6c09",
        "CidrBlock": "172.19.1.0/24",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-67e2a60f",
            "CidrBlock": "172.19.1.0/24",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": " SL_USE_VPC_B50"
          }
        ],
        "type": "Vpcs"
      },
      /* 13 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-03a91467",
        "CidrBlock": "10.0.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-c400e5ad",
            "CidrBlock": "10.0.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "Metrics-VPC"
          }
        ],
        "type": "Vpcs"
      },
      /* 14 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-79b6931d",
        "CidrBlock": "172.18.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-ba03f6d3",
            "CidrBlock": "172.18.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-fa706192",
            "Ipv6CidrBlock": "2600:1f18:4242:d900::/56",
            "Ipv6CidrBlockState": {
              "State": "associated"
            },
            "NetworkBorderGroup": "us-east-1",
            "Ipv6Pool": "Amazon"
          }
        ],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "techops_sandbox"
          }
        ],
        "type": "Vpcs"
      },
      /* 15 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-08c50072",
        "CidrBlock": "192.168.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-51d4003d",
            "CidrBlock": "192.168.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "aws:cloudformation:stack-id",
            "Value": "arn:aws:cloudformation:us-east-1:740934760981:stack/k8s-workshop-EksVpc-GHU6WZ5IZ8F8/dd1d7c00-8ab9-11e8-b372-50d5cd24fac6"
          },
          {
            "Key": "aws:cloudformation:logical-id",
            "Value": "VPC"
          },
          {
            "Key": "aws:cloudformation:stack-name",
            "Value": "k8s-workshop-EksVpc-GHU6WZ5IZ8F8"
          },
          {
            "Key": "kubernetes.io/cluster/k8s-workshop",
            "Value": "shared"
          },
          {
            "Key": "Name",
            "Value": "k8s-workshop-EksVpc-GHU6WZ5IZ8F8-VPC"
          }
        ],
        "type": "Vpcs"
      },
      /* 16 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-48bdbd2e",
        "CidrBlock": "10.0.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-ae7140c6",
            "CidrBlock": "10.0.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "CAL:ACCOUNT",
            "Value": "U6GM617F6ENW:47383:Default"
          },
          {
            "Key": "CAL:USERID",
            "Value": "P1942559791"
          },
          {
            "Key": "Name",
            "Value": "SAP CAL Default Network"
          },
          {
            "Key": "CAL:TENANTNAME",
            "Value": "U6GM617F6ENW"
          },
          {
            "Key": "CAL:CALID",
            "Value": "U6GM617F6ENW"
          }
        ],
        "type": "Vpcs"
      },
      /* 17 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-6c2d4915",
        "CidrBlock": "192.168.200.0/24",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-09ef7c62",
            "CidrBlock": "192.168.200.0/24",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "SL_DEMO_VPC_B50"
          }
        ],
        "type": "Vpcs"
      },
      /* 18 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "VpcId": "vpc-552fe52d",
        "CidrBlock": "192.168.201.0/24",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-cc8946a6",
            "CidrBlock": "192.168.201.0/24",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-949385f6",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "SL_SLQA_VPC_B50"
          }
        ],
        "type": "Vpcs"
      },
      /* 19 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-2",
        "VpcId": "vpc-f895f690",
        "CidrBlock": "192.168.0.0/20",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-41c75529",
            "CidrBlock": "192.168.0.0/20",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-4f29c126",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Application",
            "Value": "arn:aws:cloudformation:us-east-2:740934760981:stack/Mongo2S3001a-VpcLayer-1PC0U29V4BZJR/fd175490-4194-11e8-9e22-50a686f309d1"
          },
          {
            "Key": "OwnedBy",
            "Value": "Emmanuel Mayssat"
          },
          {
            "Key": "Name",
            "Value": "VPC@Mongo2S3001a"
          },
          {
            "Key": "aws:cloudformation:stack-name",
            "Value": "Mongo2S3001a-VpcLayer-1PC0U29V4BZJR"
          },
          {
            "Key": "DeployedBy",
            "Value": "Emmanuel Mayssat"
          },
          {
            "Key": "aws:cloudformation:logical-id",
            "Value": "Vpc"
          },
          {
            "Key": "aws:cloudformation:stack-id",
            "Value": "arn:aws:cloudformation:us-east-2:740934760981:stack/Mongo2S3001a-VpcLayer-1PC0U29V4BZJR/fd175490-4194-11e8-9e22-50a686f309d1"
          }
        ],
        "type": "Vpcs"
      },
      /* 20 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-2",
        "VpcId": "vpc-bacb23d3",
        "CidrBlock": "172.31.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-7abb4713",
            "CidrBlock": "172.31.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-4f29c126",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [],
        "type": "Vpcs"
      },
      /* 21 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-1",
        "VpcId": "vpc-33be4f56",
        "CidrBlock": "172.30.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-468b6b2f",
            "CidrBlock": "172.30.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-5ae1f238",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [],
        "type": "Vpcs"
      },
      /* 22 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-1",
        "VpcId": "vpc-4bd8152e",
        "CidrBlock": "10.0.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-e931d380",
            "CidrBlock": "10.0.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-5ae1f238",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "CAL:USERID",
            "Value": "P1941235567"
          },
          {
            "Key": "CAL:CALID",
            "Value": "5QAOCPBH2N7S"
          },
          {
            "Key": "CAL:TENANTNAME",
            "Value": "Development Tenant"
          },
          {
            "Key": "CAL:ACCOUNT",
            "Value": "5QAOCPBH2N7S:18116:aws"
          },
          {
            "Key": "Name",
            "Value": "SAP CAL Default Network"
          }
        ],
        "type": "Vpcs"
      },
      /* 23 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-2",
        "VpcId": "vpc-859235e0",
        "CidrBlock": "172.16.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-0673076f",
            "CidrBlock": "172.16.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-3ce2f35e",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "SKOVcp"
          }
        ],
        "type": "Vpcs"
      },
      /* 24 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-2",
        "VpcId": "vpc-9ec67bf9",
        "CidrBlock": "172.17.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-3ee99b57",
            "CidrBlock": "172.17.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-3ce2f35e",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "pebv2_dev_remote_vpc"
          }
        ],
        "type": "Vpcs"
      },
      /* 25 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-north-1",
        "VpcId": "vpc-8abe4ae3",
        "CidrBlock": "172.31.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-ba6490d3",
            "CidrBlock": "172.31.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-d537c3bc",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [],
        "type": "Vpcs"
      },
      /* 26 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-south-1",
        "VpcId": "vpc-950ee8fc",
        "CidrBlock": "172.31.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-df9477b6",
            "CidrBlock": "172.31.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-980debf1",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [],
        "type": "Vpcs"
      },
      /* 27 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-3",
        "VpcId": "vpc-6eda2007",
        "CidrBlock": "172.31.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-a2e523cb",
            "CidrBlock": "172.31.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-b433f4dd",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [],
        "type": "Vpcs"
      },
      /* 28 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-2",
        "VpcId": "vpc-b7f90cde",
        "CidrBlock": "172.31.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-02da366b",
            "CidrBlock": "172.31.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-c7fa0fae",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [],
        "type": "Vpcs"
      },
      /* 29 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-2",
        "VpcId": "vpc-52f33c3b",
        "CidrBlock": "172.41.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-92e829fb",
            "CidrBlock": "172.41.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-c7fa0fae",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "customervcp1"
          }
        ],
        "type": "Vpcs"
      },
      /* 30 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-1",
        "VpcId": "vpc-d32122b6",
        "CidrBlock": "172.30.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-f04bbd99",
            "CidrBlock": "172.30.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-5ce25d39",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [],
        "type": "Vpcs"
      },
      /* 31 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-northeast-2",
        "VpcId": "vpc-0e9b5167",
        "CidrBlock": "10.169.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-39688d50",
            "CidrBlock": "10.169.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-864eacef",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [
          {
            "Key": "Name",
            "Value": "SL_SEOUL_VPC"
          }
        ],
        "type": "Vpcs"
      },
      /* 32 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-northeast-2",
        "VpcId": "vpc-530def3a",
        "CidrBlock": "172.31.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-cd2ccda4",
            "CidrBlock": "172.31.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-864eacef",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [],
        "type": "Vpcs"
      },
      /* 33 */
      {
        "AccountId": 740934760981.0,
        "Region": "ca-central-1",
        "VpcId": "vpc-9c6e83f5",
        "CidrBlock": "172.31.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-219c7b48",
            "CidrBlock": "172.31.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-9a6984f3",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [],
        "type": "Vpcs"
      },
      /* 34 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-southeast-2",
        "VpcId": "vpc-0ec7081ed2ed19d35",
        "CidrBlock": "172.30.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-03b1fda22fa143045",
            "CidrBlock": "172.30.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-09d0a1d9ebf9a0c8d",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [],
        "type": "Vpcs"
      },
      /* 35 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-central-1",
        "VpcId": "vpc-6e6d8a07",
        "CidrBlock": "172.31.0.0/16",
        "CidrBlockAssociationSet": [
          {
            "AssociationId": "vpc-cidr-assoc-fa2fc393",
            "CidrBlock": "172.31.0.0/16",
            "CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "DhcpOptionsId": "dopt-f382669a",
        "InstanceTenancy": "default",
        "Ipv6CidrBlockAssociationSet": [],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "State": "available",
        "Tags": [],
        "type": "Vpcs"
      }
    ],
    Subnets: [
      /* 1 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-a4dfa5ed",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1d",
        "AvailabilityZoneId": "use1-az4",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "172.18.13.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [
          {
            "AssociationId": "subnet-cidr-assoc-8ebc9fc4",
            "Ipv6CidrBlock": "2600:1f18:4242:d900::/64",
            "Ipv6CidrBlockState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-a4dfa5ed",
        "Tags": [
          {
            "Key": "Name",
            "Value": "eng_sandbox_subnet"
          }
        ],
        "VpcId": "vpc-79b6931d",
        "type": "Subnets"
      },
      /* 2 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-883857b5",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1e",
        "AvailabilityZoneId": "use1-az3",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "172.18.1.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-883857b5",
        "Tags": [
          {
            "Key": "Requestor",
            "Value": "Claude Seymour & Rych Kawai"
          },
          {
            "Key": "Use",
            "Value": "Development and testing of new builds."
          },
          {
            "Key": "Name",
            "Value": "devops_sandbox_pub_subnet"
          }
        ],
        "VpcId": "vpc-79b6931d",
        "type": "Subnets"
      },
      /* 3 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-0067cc3547450ee54",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1a",
        "AvailabilityZoneId": "use1-az6",
        "AvailableIpAddressCount": 123,
        "CidrBlock": "192.168.200.0/25",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-0067cc3547450ee54",
        "Tags": [
          {
            "Key": "Name",
            "Value": "proxy-testing"
          }
        ],
        "VpcId": "vpc-0e040df70dd54bb47",
        "type": "Subnets"
      },
      /* 4 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-8f56c3d5",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1a",
        "AvailabilityZoneId": "use1-az6",
        "AvailableIpAddressCount": 27,
        "CidrBlock": "192.168.200.0/27",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-8f56c3d5",
        "Tags": [
          {
            "Key": "Name",
            "Value": "sl_demo_vpc_a50_subnet1"
          }
        ],
        "VpcId": "vpc-6c2d4915",
        "type": "Subnets"
      },
      /* 5 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-bd192fe6",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1a",
        "AvailabilityZoneId": "use1-az6",
        "AvailableIpAddressCount": 27,
        "CidrBlock": "172.19.1.32/27",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-bd192fe6",
        "Tags": [
          {
            "Key": "Name",
            "Value": "sl_use_vpc_b50_subnet2"
          }
        ],
        "VpcId": "vpc-6f3c6c09",
        "type": "Subnets"
      },
      /* 6 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-64e1ee39",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1a",
        "AvailabilityZoneId": "use1-az6",
        "AvailableIpAddressCount": 249,
        "CidrBlock": "172.110.20.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-64e1ee39",
        "Tags": [
          {
            "Key": "Name",
            "Value": "sl_devqa_jcc_X110_20_use1a"
          }
        ],
        "VpcId": "vpc-955f32ee",
        "type": "Subnets"
      },
      /* 7 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-921e58bd",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1c",
        "AvailabilityZoneId": "use1-az2",
        "AvailableIpAddressCount": 26,
        "CidrBlock": "172.19.2.32/27",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-921e58bd",
        "Tags": [
          {
            "Key": "Name",
            "Value": "sl_use_vpc_b51_subnet2"
          }
        ],
        "VpcId": "vpc-963c6cf0",
        "type": "Subnets"
      },
      /* 8 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-6a839740",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1c",
        "AvailabilityZoneId": "use1-az2",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "172.18.2.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-6a839740",
        "Tags": [
          {
            "Key": "Name",
            "Value": "techops_sandbox_utilities"
          }
        ],
        "VpcId": "vpc-79b6931d",
        "type": "Subnets"
      },
      /* 9 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-33678154",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1b",
        "AvailabilityZoneId": "use1-az1",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "172.110.21.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-33678154",
        "Tags": [
          {
            "Key": "Name",
            "Value": "sl_devqa_jcc_X110_21_use1b"
          }
        ],
        "VpcId": "vpc-955f32ee",
        "type": "Subnets"
      },
      /* 10 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-9ebe67a1",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1e",
        "AvailabilityZoneId": "use1-az3",
        "AvailableIpAddressCount": 27,
        "CidrBlock": "192.168.201.0/27",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-9ebe67a1",
        "Tags": [
          {
            "Key": "Name",
            "Value": "sl_slqa_vpc_b50_subnet1"
          }
        ],
        "VpcId": "vpc-552fe52d",
        "type": "Subnets"
      },
      /* 11 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-a3bc848e",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1c",
        "AvailabilityZoneId": "use1-az2",
        "AvailableIpAddressCount": 26,
        "CidrBlock": "172.19.2.0/27",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-a3bc848e",
        "Tags": [
          {
            "Key": "Name",
            "Value": "sl_use_vpc_b51_subnet1"
          }
        ],
        "VpcId": "vpc-963c6cf0",
        "type": "Subnets"
      },
      /* 12 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-0b608080884771161",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1b",
        "AvailabilityZoneId": "use1-az1",
        "AvailableIpAddressCount": 123,
        "CidrBlock": "192.168.200.128/25",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-0b608080884771161",
        "Tags": [
          {
            "Key": "Name",
            "Value": "proxy-testing2"
          }
        ],
        "VpcId": "vpc-0e040df70dd54bb47",
        "type": "Subnets"
      },
      /* 13 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-ee686ed3",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1e",
        "AvailabilityZoneId": "use1-az3",
        "AvailableIpAddressCount": 247,
        "CidrBlock": "10.0.0.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-ee686ed3",
        "Tags": [
          {
            "Key": "Name",
            "Value": "bluedata"
          }
        ],
        "VpcId": "vpc-0e9d1369",
        "type": "Subnets"
      },
      /* 14 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-69d9890c",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1b",
        "AvailabilityZoneId": "use1-az1",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "10.0.16.0/20",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-69d9890c",
        "Tags": [
          {
            "Key": "CAL:TENANTNAME",
            "Value": "Development Tenant"
          },
          {
            "Key": "CAL:ACCOUNT",
            "Value": "U6GM617F6ENW:47383:Default"
          },
          {
            "Key": "Name",
            "Value": "VPC subnet in us-east-1b"
          },
          {
            "Key": "CAL:CALID",
            "Value": "U6GM617F6ENW"
          },
          {
            "Key": "CAL:USERID",
            "Value": "P1942559791"
          }
        ],
        "VpcId": "vpc-48bdbd2e",
        "type": "Subnets"
      },
      /* 15 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-9def08b1",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1c",
        "AvailabilityZoneId": "use1-az2",
        "AvailableIpAddressCount": 4090,
        "CidrBlock": "10.0.32.0/20",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-9def08b1",
        "Tags": [
          {
            "Key": "CAL:ACCOUNT",
            "Value": "U6GM617F6ENW:47383:Default"
          },
          {
            "Key": "CAL:USERID",
            "Value": "P1942559791"
          },
          {
            "Key": "Name",
            "Value": "VPC subnet in us-east-1c"
          },
          {
            "Key": "CAL:CALID",
            "Value": "U6GM617F6ENW"
          },
          {
            "Key": "CAL:TENANTNAME",
            "Value": "Development Tenant"
          }
        ],
        "VpcId": "vpc-48bdbd2e",
        "type": "Subnets"
      },
      /* 16 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-53bdaf08",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1a",
        "AvailabilityZoneId": "use1-az6",
        "AvailableIpAddressCount": 4090,
        "CidrBlock": "10.0.0.0/20",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-53bdaf08",
        "Tags": [
          {
            "Key": "CAL:TENANTNAME",
            "Value": "Development Tenant"
          },
          {
            "Key": "Name",
            "Value": "VPC subnet in us-east-1a"
          },
          {
            "Key": "CAL:ACCOUNT",
            "Value": "U6GM617F6ENW:47383:Default"
          },
          {
            "Key": "CAL:USERID",
            "Value": "P1942559791"
          },
          {
            "Key": "CAL:CALID",
            "Value": "U6GM617F6ENW"
          }
        ],
        "VpcId": "vpc-48bdbd2e",
        "type": "Subnets"
      },
      /* 17 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-d698e3ea",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1e",
        "AvailabilityZoneId": "use1-az3",
        "AvailableIpAddressCount": 4089,
        "CidrBlock": "10.0.48.0/20",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-d698e3ea",
        "Tags": [
          {
            "Key": "CAL:TENANTNAME",
            "Value": "Development Tenant"
          },
          {
            "Key": "Name",
            "Value": "VPC subnet in us-east-1e"
          },
          {
            "Key": "CAL:CALID",
            "Value": "U6GM617F6ENW"
          },
          {
            "Key": "CAL:ACCOUNT",
            "Value": "U6GM617F6ENW:47383:Default"
          },
          {
            "Key": "CAL:USERID",
            "Value": "P1942559791"
          }
        ],
        "VpcId": "vpc-48bdbd2e",
        "type": "Subnets"
      },
      /* 18 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-7ba3ab46",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1e",
        "AvailabilityZoneId": "use1-az3",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "10.0.1.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-7ba3ab46",
        "Tags": [
          {
            "Key": "Name",
            "Value": "sonarsub"
          }
        ],
        "VpcId": "vpc-ce5036a9",
        "type": "Subnets"
      },
      /* 19 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-7bb9ae0c",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1d",
        "AvailabilityZoneId": "use1-az4",
        "AvailableIpAddressCount": 11,
        "CidrBlock": "10.0.0.0/28",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-7bb9ae0c",
        "Tags": [
          {
            "Key": "Name",
            "Value": "Public subnet"
          }
        ],
        "VpcId": "vpc-d609c2b2",
        "type": "Subnets"
      },
      /* 20 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-71364714",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1b",
        "AvailabilityZoneId": "use1-az1",
        "AvailableIpAddressCount": 27,
        "CidrBlock": "172.19.1.0/27",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-71364714",
        "Tags": [
          {
            "Key": "Name",
            "Value": "sl_use_vpc_b50_subnet1"
          }
        ],
        "VpcId": "vpc-6f3c6c09",
        "type": "Subnets"
      },
      /* 21 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-f0fee5cd",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1e",
        "AvailabilityZoneId": "use1-az3",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "172.18.220.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-f0fee5cd",
        "Tags": [
          {
            "Key": "Name",
            "Value": "cseymour_sandbox_subnet"
          }
        ],
        "VpcId": "vpc-79b6931d",
        "type": "Subnets"
      },
      /* 22 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-9287d8ca",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1a",
        "AvailabilityZoneId": "use1-az6",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "10.0.1.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-9287d8ca",
        "Tags": [
          {
            "Key": "Name",
            "Value": "ps-eng"
          }
        ],
        "VpcId": "vpc-ff07169a",
        "type": "Subnets"
      },
      /* 23 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-2b132973",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1a",
        "AvailabilityZoneId": "use1-az6",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "10.0.2.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-2b132973",
        "Tags": [
          {
            "Key": "Name",
            "Value": "sonarsub2"
          }
        ],
        "VpcId": "vpc-ce5036a9",
        "type": "Subnets"
      },
      /* 24 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-f68abc81",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1d",
        "AvailabilityZoneId": "use1-az4",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "10.0.0.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-f68abc81",
        "Tags": [
          {
            "Key": "Name",
            "Value": "Public subnet"
          }
        ],
        "VpcId": "vpc-227a9946",
        "type": "Subnets"
      },
      /* 25 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-74270f2c",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1a",
        "AvailabilityZoneId": "use1-az6",
        "AvailableIpAddressCount": 246,
        "CidrBlock": "10.0.1.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-74270f2c",
        "Tags": [
          {
            "Key": "Name",
            "Value": "bluedata1"
          }
        ],
        "VpcId": "vpc-0e9d1369",
        "type": "Subnets"
      },
      /* 26 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-5631a95a",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1f",
        "AvailabilityZoneId": "use1-az5",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "10.0.64.0/20",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-5631a95a",
        "Tags": [
          {
            "Key": "CAL:CALID",
            "Value": "U6GM617F6ENW"
          },
          {
            "Key": "CAL:TENANTNAME",
            "Value": "Development Tenant"
          },
          {
            "Key": "Name",
            "Value": "VPC subnet in us-east-1f"
          },
          {
            "Key": "CAL:ACCOUNT",
            "Value": "U6GM617F6ENW:47383:Default"
          },
          {
            "Key": "CAL:USERID",
            "Value": "P1942559791"
          }
        ],
        "VpcId": "vpc-48bdbd2e",
        "type": "Subnets"
      },
      /* 27 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-4afbdd3d",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1d",
        "AvailabilityZoneId": "use1-az4",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "10.0.0.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-4afbdd3d",
        "Tags": [
          {
            "Key": "Name",
            "Value": "Public subnet"
          }
        ],
        "VpcId": "vpc-ff07169a",
        "type": "Subnets"
      },
      /* 28 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-18c1156e",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1d",
        "AvailabilityZoneId": "use1-az4",
        "AvailableIpAddressCount": 65514,
        "CidrBlock": "10.0.0.0/16",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-18c1156e",
        "Tags": [
          {
            "Key": "Name",
            "Value": "Public subnet"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Subnets"
      },
      /* 29 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-3128526c",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1a",
        "AvailabilityZoneId": "use1-az6",
        "AvailableIpAddressCount": 27,
        "CidrBlock": "172.19.2.64/27",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-3128526c",
        "Tags": [
          {
            "Key": "Name",
            "Value": "sl_use_vpc_b51_subnet3"
          }
        ],
        "VpcId": "vpc-963c6cf0",
        "type": "Subnets"
      },
      /* 30 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "SubnetId": "subnet-479c047a",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-1e",
        "AvailabilityZoneId": "use1-az3",
        "AvailableIpAddressCount": 65530,
        "CidrBlock": "10.0.0.0/16",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-1:740934760981:subnet/subnet-479c047a",
        "Tags": [
          {
            "Key": "Name",
            "Value": "canary-testvpc"
          }
        ],
        "VpcId": "vpc-9b5f10ff",
        "type": "Subnets"
      },
      /* 31 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-2",
        "SubnetId": "subnet-d7d8d1af",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-2b",
        "AvailabilityZoneId": "use2-az2",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.16.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-2:740934760981:subnet/subnet-d7d8d1af",
        "Tags": [],
        "VpcId": "vpc-bacb23d3",
        "type": "Subnets"
      },
      /* 32 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-2",
        "SubnetId": "subnet-9a1c35d0",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-2c",
        "AvailabilityZoneId": "use2-az3",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.32.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-2:740934760981:subnet/subnet-9a1c35d0",
        "Tags": [],
        "VpcId": "vpc-bacb23d3",
        "type": "Subnets"
      },
      /* 33 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-2",
        "SubnetId": "subnet-b47f88dd",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-east-2a",
        "AvailabilityZoneId": "use2-az1",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.0.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-east-2:740934760981:subnet/subnet-b47f88dd",
        "Tags": [],
        "VpcId": "vpc-bacb23d3",
        "type": "Subnets"
      },
      /* 34 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-1",
        "SubnetId": "subnet-851fdde0",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-west-1b",
        "AvailabilityZoneId": "usw1-az1",
        "AvailableIpAddressCount": 250,
        "CidrBlock": "172.30.1.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-west-1:740934760981:subnet/subnet-851fdde0",
        "Tags": [],
        "VpcId": "vpc-33be4f56",
        "type": "Subnets"
      },
      /* 35 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-1",
        "SubnetId": "subnet-3d001a7b",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-west-1a",
        "AvailabilityZoneId": "usw1-az3",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "10.0.0.0/20",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-west-1:740934760981:subnet/subnet-3d001a7b",
        "Tags": [
          {
            "Key": "CAL:ACCOUNT",
            "Value": "5QAOCPBH2N7S:18116:aws"
          },
          {
            "Key": "CAL:CALID",
            "Value": "5QAOCPBH2N7S"
          },
          {
            "Key": "CAL:USERID",
            "Value": "P1941235567"
          },
          {
            "Key": "CAL:TENANTNAME",
            "Value": "Development Tenant"
          },
          {
            "Key": "Name",
            "Value": "VPC subnet in us-west-1a"
          }
        ],
        "VpcId": "vpc-4bd8152e",
        "type": "Subnets"
      },
      /* 36 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-1",
        "SubnetId": "subnet-a52321e3",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-west-1a",
        "AvailabilityZoneId": "usw1-az3",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "172.30.0.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-west-1:740934760981:subnet/subnet-a52321e3",
        "Tags": [],
        "VpcId": "vpc-33be4f56",
        "type": "Subnets"
      },
      /* 37 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-1",
        "SubnetId": "subnet-0a2af06f",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-west-1b",
        "AvailabilityZoneId": "usw1-az1",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "10.0.16.0/20",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-west-1:740934760981:subnet/subnet-0a2af06f",
        "Tags": [
          {
            "Key": "Name",
            "Value": "VPC subnet in us-west-1b"
          },
          {
            "Key": "CAL:ACCOUNT",
            "Value": "5QAOCPBH2N7S:18116:aws"
          },
          {
            "Key": "CAL:CALID",
            "Value": "5QAOCPBH2N7S"
          },
          {
            "Key": "CAL:TENANTNAME",
            "Value": "Development Tenant"
          },
          {
            "Key": "CAL:USERID",
            "Value": "P1941235567"
          }
        ],
        "VpcId": "vpc-4bd8152e",
        "type": "Subnets"
      },
      /* 38 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-2",
        "SubnetId": "subnet-d722fda0",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-west-2b",
        "AvailabilityZoneId": "usw2-az2",
        "AvailableIpAddressCount": 250,
        "CidrBlock": "172.16.1.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-west-2:740934760981:subnet/subnet-d722fda0",
        "Tags": [
          {
            "Key": "Name",
            "Value": "skosubnet"
          }
        ],
        "VpcId": "vpc-859235e0",
        "type": "Subnets"
      },
      /* 39 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-2",
        "SubnetId": "subnet-db24d882",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-west-2c",
        "AvailabilityZoneId": "usw2-az3",
        "AvailableIpAddressCount": 250,
        "CidrBlock": "172.16.2.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-west-2:740934760981:subnet/subnet-db24d882",
        "Tags": [
          {
            "Key": "Name",
            "Value": "skosubnet"
          }
        ],
        "VpcId": "vpc-859235e0",
        "type": "Subnets"
      },
      /* 40 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-2",
        "SubnetId": "subnet-db259cbe",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-west-2a",
        "AvailabilityZoneId": "usw2-az1",
        "AvailableIpAddressCount": 249,
        "CidrBlock": "172.16.0.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-west-2:740934760981:subnet/subnet-db259cbe",
        "Tags": [
          {
            "Key": "Name",
            "Value": "skosubnet"
          }
        ],
        "VpcId": "vpc-859235e0",
        "type": "Subnets"
      },
      /* 41 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-2",
        "SubnetId": "subnet-7d82511a",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "us-west-2a",
        "AvailabilityZoneId": "usw2-az1",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "172.17.1.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:us-west-2:740934760981:subnet/subnet-7d82511a",
        "Tags": [
          {
            "Key": "Name",
            "Value": "pebv2_dev_remote_vpc_sn1_uswest2a"
          }
        ],
        "VpcId": "vpc-9ec67bf9",
        "type": "Subnets"
      },
      /* 42 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-north-1",
        "SubnetId": "subnet-8a6983e3",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-north-1a",
        "AvailabilityZoneId": "eun1-az1",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.16.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-north-1:740934760981:subnet/subnet-8a6983e3",
        "Tags": [],
        "VpcId": "vpc-8abe4ae3",
        "type": "Subnets"
      },
      /* 43 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-north-1",
        "SubnetId": "subnet-22e7d068",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-north-1c",
        "AvailabilityZoneId": "eun1-az3",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.0.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-north-1:740934760981:subnet/subnet-22e7d068",
        "Tags": [],
        "VpcId": "vpc-8abe4ae3",
        "type": "Subnets"
      },
      /* 44 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-north-1",
        "SubnetId": "subnet-dfadb8a7",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-north-1b",
        "AvailabilityZoneId": "eun1-az2",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.32.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-north-1:740934760981:subnet/subnet-dfadb8a7",
        "Tags": [],
        "VpcId": "vpc-8abe4ae3",
        "type": "Subnets"
      },
      /* 45 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-south-1",
        "SubnetId": "subnet-3c866055",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "ap-south-1a",
        "AvailabilityZoneId": "aps1-az1",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.16.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:ap-south-1:740934760981:subnet/subnet-3c866055",
        "Tags": [],
        "VpcId": "vpc-950ee8fc",
        "type": "Subnets"
      },
      /* 46 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-south-1",
        "SubnetId": "subnet-d6c5e59c",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "ap-south-1b",
        "AvailabilityZoneId": "aps1-az3",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.0.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:ap-south-1:740934760981:subnet/subnet-d6c5e59c",
        "Tags": [],
        "VpcId": "vpc-950ee8fc",
        "type": "Subnets"
      },
      /* 47 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-south-1",
        "SubnetId": "subnet-047c607c",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "ap-south-1c",
        "AvailabilityZoneId": "aps1-az2",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.32.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:ap-south-1:740934760981:subnet/subnet-047c607c",
        "Tags": [],
        "VpcId": "vpc-950ee8fc",
        "type": "Subnets"
      },
      /* 48 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-3",
        "SubnetId": "subnet-6fcbf525",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-west-3c",
        "AvailabilityZoneId": "euw3-az3",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.32.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-west-3:740934760981:subnet/subnet-6fcbf525",
        "Tags": [],
        "VpcId": "vpc-6eda2007",
        "type": "Subnets"
      },
      /* 49 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-3",
        "SubnetId": "subnet-0608137e",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-west-3b",
        "AvailabilityZoneId": "euw3-az2",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.16.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-west-3:740934760981:subnet/subnet-0608137e",
        "Tags": [],
        "VpcId": "vpc-6eda2007",
        "type": "Subnets"
      },
      /* 50 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-3",
        "SubnetId": "subnet-f728ef9e",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-west-3a",
        "AvailabilityZoneId": "euw3-az1",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.0.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-west-3:740934760981:subnet/subnet-f728ef9e",
        "Tags": [],
        "VpcId": "vpc-6eda2007",
        "type": "Subnets"
      },
      /* 51 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-2",
        "SubnetId": "subnet-e80015a2",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-west-2b",
        "AvailabilityZoneId": "euw2-az3",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "172.41.1.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-west-2:740934760981:subnet/subnet-e80015a2",
        "Tags": [],
        "VpcId": "vpc-52f33c3b",
        "type": "Subnets"
      },
      /* 52 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-2",
        "SubnetId": "subnet-77a7b80f",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-west-2a",
        "AvailabilityZoneId": "euw2-az2",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.0.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-west-2:740934760981:subnet/subnet-77a7b80f",
        "Tags": [],
        "VpcId": "vpc-b7f90cde",
        "type": "Subnets"
      },
      /* 53 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-2",
        "SubnetId": "subnet-c1f5c68b",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-west-2b",
        "AvailabilityZoneId": "euw2-az3",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.16.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-west-2:740934760981:subnet/subnet-c1f5c68b",
        "Tags": [],
        "VpcId": "vpc-b7f90cde",
        "type": "Subnets"
      },
      /* 54 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-2",
        "SubnetId": "subnet-7d986014",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-west-2c",
        "AvailabilityZoneId": "euw2-az1",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.32.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-west-2:740934760981:subnet/subnet-7d986014",
        "Tags": [],
        "VpcId": "vpc-b7f90cde",
        "type": "Subnets"
      },
      /* 55 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-1",
        "SubnetId": "subnet-44ed1820",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-west-1c",
        "AvailabilityZoneId": "euw1-az1",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "172.30.2.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-west-1:740934760981:subnet/subnet-44ed1820",
        "Tags": [],
        "VpcId": "vpc-d32122b6",
        "type": "Subnets"
      },
      /* 56 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-1",
        "SubnetId": "subnet-a8a9bbdf",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-west-1a",
        "AvailabilityZoneId": "euw1-az2",
        "AvailableIpAddressCount": 250,
        "CidrBlock": "172.30.0.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-west-1:740934760981:subnet/subnet-a8a9bbdf",
        "Tags": [],
        "VpcId": "vpc-d32122b6",
        "type": "Subnets"
      },
      /* 57 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-1",
        "SubnetId": "subnet-ad80aaf4",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-west-1b",
        "AvailabilityZoneId": "euw1-az3",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "172.30.1.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-west-1:740934760981:subnet/subnet-ad80aaf4",
        "Tags": [],
        "VpcId": "vpc-d32122b6",
        "type": "Subnets"
      },
      /* 58 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-northeast-2",
        "SubnetId": "subnet-90ae82da",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "ap-northeast-2c",
        "AvailabilityZoneId": "apne2-az3",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.16.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:ap-northeast-2:740934760981:subnet/subnet-90ae82da",
        "Tags": [],
        "VpcId": "vpc-530def3a",
        "type": "Subnets"
      },
      /* 59 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-northeast-2",
        "SubnetId": "subnet-d268aba9",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "ap-northeast-2b",
        "AvailabilityZoneId": "apne2-az2",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.32.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:ap-northeast-2:740934760981:subnet/subnet-d268aba9",
        "Tags": [],
        "VpcId": "vpc-530def3a",
        "type": "Subnets"
      },
      /* 60 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-northeast-2",
        "SubnetId": "subnet-6f588d06",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "ap-northeast-2a",
        "AvailabilityZoneId": "apne2-az1",
        "AvailableIpAddressCount": 249,
        "CidrBlock": "10.169.0.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": false,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:ap-northeast-2:740934760981:subnet/subnet-6f588d06",
        "Tags": [
          {
            "Key": "Name",
            "Value": "sl_seoul_vpc_pubsn_apne2a"
          }
        ],
        "VpcId": "vpc-0e9b5167",
        "type": "Subnets"
      },
      /* 61 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-northeast-2",
        "SubnetId": "subnet-02bf5d6b",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "ap-northeast-2a",
        "AvailabilityZoneId": "apne2-az1",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.0.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:ap-northeast-2:740934760981:subnet/subnet-02bf5d6b",
        "Tags": [],
        "VpcId": "vpc-530def3a",
        "type": "Subnets"
      },
      /* 62 */
      {
        "AccountId": 740934760981.0,
        "Region": "ca-central-1",
        "SubnetId": "subnet-2a977a43",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "ca-central-1a",
        "AvailabilityZoneId": "cac1-az1",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.16.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:ca-central-1:740934760981:subnet/subnet-2a977a43",
        "Tags": [],
        "VpcId": "vpc-9c6e83f5",
        "type": "Subnets"
      },
      /* 63 */
      {
        "AccountId": 740934760981.0,
        "Region": "ca-central-1",
        "SubnetId": "subnet-79949901",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "ca-central-1b",
        "AvailabilityZoneId": "cac1-az2",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.0.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:ca-central-1:740934760981:subnet/subnet-79949901",
        "Tags": [],
        "VpcId": "vpc-9c6e83f5",
        "type": "Subnets"
      },
      /* 64 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-southeast-2",
        "SubnetId": "subnet-027223f1c2cc2545c",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "ap-southeast-2b",
        "AvailabilityZoneId": "apse2-az1",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "172.30.1.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:ap-southeast-2:740934760981:subnet/subnet-027223f1c2cc2545c",
        "Tags": [],
        "VpcId": "vpc-0ec7081ed2ed19d35",
        "type": "Subnets"
      },
      /* 65 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-southeast-2",
        "SubnetId": "subnet-02a6489dede996e29",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "ap-southeast-2a",
        "AvailabilityZoneId": "apse2-az3",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "172.30.0.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:ap-southeast-2:740934760981:subnet/subnet-02a6489dede996e29",
        "Tags": [],
        "VpcId": "vpc-0ec7081ed2ed19d35",
        "type": "Subnets"
      },
      /* 66 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-southeast-2",
        "SubnetId": "subnet-0b7eeb7e3f96f6acb",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "ap-southeast-2c",
        "AvailabilityZoneId": "apse2-az2",
        "AvailableIpAddressCount": 251,
        "CidrBlock": "172.30.2.0/24",
        "DefaultForAz": false,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:ap-southeast-2:740934760981:subnet/subnet-0b7eeb7e3f96f6acb",
        "Tags": [],
        "VpcId": "vpc-0ec7081ed2ed19d35",
        "type": "Subnets"
      },
      /* 67 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-central-1",
        "SubnetId": "subnet-3b8baa71",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-central-1c",
        "AvailabilityZoneId": "euc1-az1",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.32.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-central-1:740934760981:subnet/subnet-3b8baa71",
        "Tags": [],
        "VpcId": "vpc-6e6d8a07",
        "type": "Subnets"
      },
      /* 68 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-central-1",
        "SubnetId": "subnet-6acbca12",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-central-1b",
        "AvailabilityZoneId": "euc1-az3",
        "AvailableIpAddressCount": 4090,
        "CidrBlock": "172.31.0.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-central-1:740934760981:subnet/subnet-6acbca12",
        "Tags": [],
        "VpcId": "vpc-6e6d8a07",
        "type": "Subnets"
      },
      /* 69 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-central-1",
        "SubnetId": "subnet-1261877b",
        "AssignIpv6AddressOnCreation": false,
        "AvailabilityZone": "eu-central-1a",
        "AvailabilityZoneId": "euc1-az2",
        "AvailableIpAddressCount": 4091,
        "CidrBlock": "172.31.16.0/20",
        "DefaultForAz": true,
        "Ipv6CidrBlockAssociationSet": [],
        "Latest": true,
        "MapPublicIpOnLaunch": true,
        "OwnerId": "740934760981",
        "State": "available",
        "SubnetArn": "arn:aws:ec2:eu-central-1:740934760981:subnet/subnet-1261877b",
        "Tags": [],
        "VpcId": "vpc-6e6d8a07",
        "type": "Subnets"
      }
    ],
    RouteTables: [
      /* 1 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-c68248a2",
        "Associations": [
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-ff2cbb9b",
            "RouteTableId": "rtb-c68248a2",
            "SubnetId": "subnet-f68abc81",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-89eab8ec",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-227a9946",
        "type": "RouteTables"
      },
      /* 2 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-de9d71b9",
        "Associations": [
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-6e8af309",
            "RouteTableId": "rtb-de9d71b9",
            "SubnetId": "subnet-883857b5",
            "AssociationState": {
              "State": "associated"
            }
          },
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-99b676e0",
            "RouteTableId": "rtb-de9d71b9",
            "SubnetId": "subnet-f0fee5cd",
            "AssociationState": {
              "State": "associated"
            }
          },
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-eb827692",
            "RouteTableId": "rtb-de9d71b9",
            "SubnetId": "subnet-6a839740",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.18.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-4dba1d29",
            "Origin": "CreateRoute",
            "State": "active"
          },
          {
            "DestinationIpv6CidrBlock": "2600:1f18:4242:d900::/56",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-79b6931d",
        "type": "RouteTables"
      },
      /* 3 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-57722033",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-6a4d8c0d",
            "RouteTableId": "rtb-57722033",
            "AssociationState": {
              "State": "associated"
            }
          },
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-f5c60692",
            "RouteTableId": "rtb-57722033",
            "SubnetId": "subnet-18c1156e",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-0540ab61",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [
          {
            "Key": "Name",
            "Value": "Hadoop"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "RouteTables"
      },
      /* 4 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-b86899de",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-66e7e800",
            "RouteTableId": "rtb-b86899de",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-be261fda",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-ce5036a9",
        "type": "RouteTables"
      },
      /* 5 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-064c147f",
        "Associations": [
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-afca31d4",
            "RouteTableId": "rtb-064c147f",
            "SubnetId": "subnet-53bdaf08",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-a1d328c7",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-48bdbd2e",
        "type": "RouteTables"
      },
      /* 6 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-6206831d",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-594c9627",
            "RouteTableId": "rtb-6206831d",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "192.168.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-08c50072",
        "type": "RouteTables"
      },
      /* 7 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-c48248a0",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-fd2cbb99",
            "RouteTableId": "rtb-c48248a0",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-227a9946",
        "type": "RouteTables"
      },
      /* 8 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-1687d572",
        "Associations": [],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-0540ab61",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [
          {
            "Key": "Name",
            "Value": "Hadoop"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "RouteTables"
      },
      /* 9 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-eed7b292",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-4c3ae833",
            "RouteTableId": "rtb-eed7b292",
            "AssociationState": {
              "State": "associated"
            }
          },
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-18964b67",
            "RouteTableId": "rtb-eed7b292",
            "SubnetId": "subnet-33678154",
            "AssociationState": {
              "State": "associated"
            }
          },
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-b66fbdc9",
            "RouteTableId": "rtb-eed7b292",
            "SubnetId": "subnet-64e1ee39",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.110.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-eee25996",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-955f32ee",
        "type": "RouteTables"
      },
      /* 10 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-9b827eff",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-bbc875df",
            "RouteTableId": "rtb-9b827eff",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-ff07169a",
        "type": "RouteTables"
      },
      /* 11 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-086c490b049c89644",
        "Associations": [
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-0166775ce4102baa8",
            "RouteTableId": "rtb-086c490b049c89644",
            "SubnetId": "subnet-0b608080884771161",
            "AssociationState": {
              "State": "associated"
            }
          },
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-07dd9dd2a9e6a31fa",
            "RouteTableId": "rtb-086c490b049c89644",
            "AssociationState": {
              "State": "associated"
            }
          },
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-00e714a88ecd47ce7",
            "RouteTableId": "rtb-086c490b049c89644",
            "SubnetId": "subnet-0067cc3547450ee54",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "192.168.200.0/24",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-028dfd0636593a74b",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-0e040df70dd54bb47",
        "type": "RouteTables"
      },
      /* 12 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-904f17e9",
        "Associations": [
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-26d62d5d",
            "RouteTableId": "rtb-904f17e9",
            "SubnetId": "subnet-d698e3ea",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-a1d328c7",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-48bdbd2e",
        "type": "RouteTables"
      },
      /* 13 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-8b86e0f2",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-5ef6c926",
            "RouteTableId": "rtb-8b86e0f2",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.19.2.0/24",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-6d3b2e0a",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [
          {
            "Key": "Name",
            "Value": "sl_use_vpc_b51_rt1"
          }
        ],
        "VpcId": "vpc-963c6cf0",
        "type": "RouteTables"
      },
      /* 14 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-d22990b6",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-41094625",
            "RouteTableId": "rtb-d22990b6",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/28",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-d609c2b2",
        "type": "RouteTables"
      },
      /* 15 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-65837f01",
        "Associations": [
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-188ef77e",
            "RouteTableId": "rtb-65837f01",
            "SubnetId": "subnet-9287d8ca",
            "AssociationState": {
              "State": "associated"
            }
          },
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-85c875e1",
            "RouteTableId": "rtb-65837f01",
            "SubnetId": "subnet-4afbdd3d",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-560f4333",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-ff07169a",
        "type": "RouteTables"
      },
      /* 16 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-19d39b7d",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-7a48bb1d",
            "RouteTableId": "rtb-19d39b7d",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "10.0.0.0/8",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-e4bd2f80",
        "type": "RouteTables"
      },
      /* 17 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-af129fd5",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-ed35f390",
            "RouteTableId": "rtb-af129fd5",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "192.168.201.0/24",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-02db007b",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-552fe52d",
        "type": "RouteTables"
      },
      /* 18 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-5d160b3a",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-043f1e62",
            "RouteTableId": "rtb-5d160b3a",
            "AssociationState": {
              "State": "associated"
            }
          },
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-3299b854",
            "RouteTableId": "rtb-5d160b3a",
            "SubnetId": "subnet-74270f2c",
            "AssociationState": {
              "State": "associated"
            }
          },
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-2c99b84a",
            "RouteTableId": "rtb-5d160b3a",
            "SubnetId": "subnet-ee686ed3",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-02cfe266",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-0e9d1369",
        "type": "RouteTables"
      },
      /* 19 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-b64e16cf",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-7bcb3000",
            "RouteTableId": "rtb-b64e16cf",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-48bdbd2e",
        "type": "RouteTables"
      },
      /* 20 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-a4b9dfdd",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-86f8c7fe",
            "RouteTableId": "rtb-a4b9dfdd",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.19.1.0/24",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-99382dfe",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [
          {
            "Key": "Name",
            "Value": "sl_use_vpc_b50_rt1"
          }
        ],
        "VpcId": "vpc-6f3c6c09",
        "type": "RouteTables"
      },
      /* 21 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-a74c14de",
        "Associations": [
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-22cb3059",
            "RouteTableId": "rtb-a74c14de",
            "SubnetId": "subnet-9def08b1",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-a1d328c7",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-48bdbd2e",
        "type": "RouteTables"
      },
      /* 22 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-a26d58da",
        "Associations": [
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-45b5533f",
            "RouteTableId": "rtb-a26d58da",
            "SubnetId": "subnet-8f56c3d5",
            "AssociationState": {
              "State": "associated"
            }
          },
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-bcb254c6",
            "RouteTableId": "rtb-a26d58da",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "192.168.200.0/24",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-78014b1e",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-6c2d4915",
        "type": "RouteTables"
      },
      /* 23 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-c24b13bb",
        "Associations": [
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-e9d42f92",
            "RouteTableId": "rtb-c24b13bb",
            "SubnetId": "subnet-69d9890c",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-a1d328c7",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-48bdbd2e",
        "type": "RouteTables"
      },
      /* 24 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-fe4b1a86",
        "Associations": [
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-e49c989f",
            "RouteTableId": "rtb-fe4b1a86",
            "SubnetId": "subnet-5631a95a",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-a1d328c7",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-48bdbd2e",
        "type": "RouteTables"
      },
      /* 25 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-dc2990b8",
        "Associations": [
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-43094627",
            "RouteTableId": "rtb-dc2990b8",
            "SubnetId": "subnet-7bb9ae0c",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/28",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-974b78f2",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-d609c2b2",
        "type": "RouteTables"
      },
      /* 26 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-d09d71b7",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-648af303",
            "RouteTableId": "rtb-d09d71b7",
            "AssociationState": {
              "State": "associated"
            }
          },
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-a561cfde",
            "RouteTableId": "rtb-d09d71b7",
            "SubnetId": "subnet-a4dfa5ed",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.18.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-4dba1d29",
            "Origin": "CreateRoute",
            "State": "active"
          },
          {
            "DestinationIpv6CidrBlock": "2600:1f18:4242:d900::/56",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationIpv6CidrBlock": "::/0",
            "GatewayId": "igw-4dba1d29",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-79b6931d",
        "type": "RouteTables"
      },
      /* 27 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-939b93f7",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-8cb620eb",
            "RouteTableId": "rtb-939b93f7",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-819743e5",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-9b5f10ff",
        "type": "RouteTables"
      },
      /* 28 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "RouteTableId": "rtb-c1b3dea5",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-38e1db5c",
            "RouteTableId": "rtb-c1b3dea5",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-03a91467",
        "type": "RouteTables"
      },
      /* 29 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-2",
        "RouteTableId": "rtb-8015fde9",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-c4eb00ad",
            "RouteTableId": "rtb-8015fde9",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "192.168.0.0/20",
            "Origin": "CreateRoute",
            "State": "active",
            "VpcPeeringConnectionId": "pcx-6fa9ff06"
          },
          {
            "DestinationCidrBlock": "172.31.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-b72dc3de",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-bacb23d3",
        "type": "RouteTables"
      },
      /* 30 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-2",
        "RouteTableId": "rtb-09052261",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-931eacf8",
            "RouteTableId": "rtb-09052261",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "192.168.0.0/20",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-f895f690",
        "type": "RouteTables"
      },
      /* 31 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-1",
        "RouteTableId": "rtb-115caf74",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-545aa831",
            "RouteTableId": "rtb-115caf74",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.30.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-7e43a21b",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-33be4f56",
        "type": "RouteTables"
      },
      /* 32 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-1",
        "RouteTableId": "rtb-e719d182",
        "Associations": [
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-b38c46d6",
            "RouteTableId": "rtb-e719d182",
            "SubnetId": "subnet-3d001a7b",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-4c40b629",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [
          {
            "Key": "CAL:CALID",
            "Value": "5QAOCPBH2N7S"
          },
          {
            "Key": "Name",
            "Value": "VPC subnet in us-west-1a RouteTable"
          },
          {
            "Key": "CAL:ACCOUNT",
            "Value": "5QAOCPBH2N7S:18116:aws"
          },
          {
            "Key": "CAL:USERID",
            "Value": "P1941235567"
          },
          {
            "Key": "CAL:TENANTNAME",
            "Value": "Development Tenant"
          }
        ],
        "VpcId": "vpc-4bd8152e",
        "type": "RouteTables"
      },
      /* 33 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-1",
        "RouteTableId": "rtb-e619d183",
        "Associations": [
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-b28c46d7",
            "RouteTableId": "rtb-e619d183",
            "SubnetId": "subnet-0a2af06f",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-4c40b629",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [
          {
            "Key": "Name",
            "Value": "VPC subnet in us-west-1b RouteTable"
          },
          {
            "Key": "CAL:CALID",
            "Value": "5QAOCPBH2N7S"
          },
          {
            "Key": "CAL:TENANTNAME",
            "Value": "Development Tenant"
          },
          {
            "Key": "CAL:ACCOUNT",
            "Value": "5QAOCPBH2N7S:18116:aws"
          },
          {
            "Key": "CAL:USERID",
            "Value": "P1941235567"
          }
        ],
        "VpcId": "vpc-4bd8152e",
        "type": "RouteTables"
      },
      /* 34 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-1",
        "RouteTableId": "rtb-e519d180",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-b18c46d4",
            "RouteTableId": "rtb-e519d180",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.0.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-4bd8152e",
        "type": "RouteTables"
      },
      /* 35 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-2",
        "RouteTableId": "rtb-7606a513",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-131daa76",
            "RouteTableId": "rtb-7606a513",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.16.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-0f23db69",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [
          {
            "Key": "Name",
            "Value": "SKOGW"
          }
        ],
        "VpcId": "vpc-859235e0",
        "type": "RouteTables"
      },
      /* 36 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-west-2",
        "RouteTableId": "rtb-9f662ef8",
        "Associations": [
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-5a8c103c",
            "RouteTableId": "rtb-9f662ef8",
            "SubnetId": "subnet-7d82511a",
            "AssociationState": {
              "State": "associated"
            }
          },
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-8732a3e1",
            "RouteTableId": "rtb-9f662ef8",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.17.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "10.0.0.0/8",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-7899da1c",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [
          {
            "Key": "Name",
            "Value": "pebv2_dev_remote_vpc_route_table01"
          }
        ],
        "VpcId": "vpc-9ec67bf9",
        "type": "RouteTables"
      },
      /* 37 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-north-1",
        "RouteTableId": "rtb-b6b245df",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-e008fc89",
            "RouteTableId": "rtb-b6b245df",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.31.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-912cc7f8",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-8abe4ae3",
        "type": "RouteTables"
      },
      /* 38 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-south-1",
        "RouteTableId": "rtb-de1cfab7",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-d411f7bd",
            "RouteTableId": "rtb-de1cfab7",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.31.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-0010f769",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-950ee8fc",
        "type": "RouteTables"
      },
      /* 39 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-3",
        "RouteTableId": "rtb-6e4e8c07",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-567cbf3f",
            "RouteTableId": "rtb-6e4e8c07",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.31.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-f7dd219e",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-6eda2007",
        "type": "RouteTables"
      },
      /* 40 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-2",
        "RouteTableId": "rtb-836ca5ea",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-b760b0de",
            "RouteTableId": "rtb-836ca5ea",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.41.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-52f33c3b",
        "type": "RouteTables"
      },
      /* 41 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-2",
        "RouteTableId": "rtb-fbd12492",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-09639760",
            "RouteTableId": "rtb-fbd12492",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.31.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-410fe728",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-b7f90cde",
        "type": "RouteTables"
      },
      /* 42 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-west-1",
        "RouteTableId": "rtb-acf106c8",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-1982317d",
            "RouteTableId": "rtb-acf106c8",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.30.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-f8e79a9d",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-d32122b6",
        "type": "RouteTables"
      },
      /* 43 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-northeast-2",
        "RouteTableId": "rtb-45b2642c",
        "Associations": [
          {
            "Main": false,
            "RouteTableAssociationId": "rtbassoc-3a67ce53",
            "RouteTableId": "rtb-45b2642c",
            "SubnetId": "subnet-6f588d06",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.169.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-3414ed5d",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-0e9b5167",
        "type": "RouteTables"
      },
      /* 44 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-northeast-2",
        "RouteTableId": "rtb-42b2642b",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-3b67ce52",
            "RouteTableId": "rtb-42b2642b",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "10.169.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-0e9b5167",
        "type": "RouteTables"
      },
      /* 45 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-northeast-2",
        "RouteTableId": "rtb-2c8b6645",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-4df31f24",
            "RouteTableId": "rtb-2c8b6645",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.31.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-40ef0629",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-530def3a",
        "type": "RouteTables"
      },
      /* 46 */
      {
        "AccountId": 740934760981.0,
        "Region": "ca-central-1",
        "RouteTableId": "rtb-e64ea38f",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-e05db089",
            "RouteTableId": "rtb-e64ea38f",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.31.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-9fd735f6",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-9c6e83f5",
        "type": "RouteTables"
      },
      /* 47 */
      {
        "AccountId": 740934760981.0,
        "Region": "ap-southeast-2",
        "RouteTableId": "rtb-03089d8bc5e0b3371",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-00ca04afaab42f2f7",
            "RouteTableId": "rtb-03089d8bc5e0b3371",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.30.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-087d6ac08db0d1b84",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-0ec7081ed2ed19d35",
        "type": "RouteTables"
      },
      /* 48 */
      {
        "AccountId": 740934760981.0,
        "Region": "eu-central-1",
        "RouteTableId": "rtb-e913f480",
        "Associations": [
          {
            "Main": true,
            "RouteTableAssociationId": "rtbassoc-fb56b192",
            "RouteTableId": "rtb-e913f480",
            "AssociationState": {
              "State": "associated"
            }
          }
        ],
        "Latest": true,
        "OwnerId": "740934760981",
        "PropagatingVgws": [],
        "Routes": [
          {
            "DestinationCidrBlock": "172.31.0.0/16",
            "GatewayId": "local",
            "Origin": "CreateRouteTable",
            "State": "active"
          },
          {
            "DestinationCidrBlock": "0.0.0.0/0",
            "GatewayId": "igw-75cf281c",
            "Origin": "CreateRoute",
            "State": "active"
          }
        ],
        "Tags": [],
        "VpcId": "vpc-6e6d8a07",
        "type": "RouteTables"
      }
    ],
    NetworkAcls: [
      /* 1 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-02934366",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-0bdab16d",
            "NetworkAclId": "acl-02934366",
            "SubnetId": "subnet-7bb9ae0c"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-d609c2b2",
        "type": "NetworkAcls"
      },
      /* 2 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-a36655c7",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-6bc05916",
            "NetworkAclId": "acl-a36655c7",
            "SubnetId": "subnet-f0fee5cd"
          },
          {
            "NetworkAclAssociationId": "aclassoc-49fb6731",
            "NetworkAclId": "acl-a36655c7",
            "SubnetId": "subnet-883857b5"
          },
          {
            "NetworkAclAssociationId": "aclassoc-1233826f",
            "NetworkAclId": "acl-a36655c7",
            "SubnetId": "subnet-6a839740"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "Egress": true,
            "Ipv6CidrBlock": "::/0",
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32768
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "Egress": false,
            "Ipv6CidrBlock": "::/0",
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32768
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-79b6931d",
        "type": "NetworkAcls"
      },
      /* 3 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-7da44904",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-01ac2749",
            "NetworkAclId": "acl-7da44904",
            "SubnetId": "subnet-921e58bd"
          },
          {
            "NetworkAclAssociationId": "aclassoc-1777bb66",
            "NetworkAclId": "acl-7da44904",
            "SubnetId": "subnet-a3bc848e"
          },
          {
            "NetworkAclAssociationId": "aclassoc-febc37b6",
            "NetworkAclId": "acl-7da44904",
            "SubnetId": "subnet-3128526c"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-963c6cf0",
        "type": "NetworkAcls"
      },
      /* 4 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-3e50bc5a",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-8b5fbeed",
            "NetworkAclId": "acl-3e50bc5a",
            "SubnetId": "subnet-f68abc81"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-227a9946",
        "type": "NetworkAcls"
      },
      /* 5 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-95131dec",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-d0af00a2",
            "NetworkAclId": "acl-95131dec",
            "SubnetId": "subnet-8f56c3d5"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-6c2d4915",
        "type": "NetworkAcls"
      },
      /* 6 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-947d24f0",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-0b1bd873",
            "NetworkAclId": "acl-947d24f0",
            "SubnetId": "subnet-479c047a"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-9b5f10ff",
        "type": "NetworkAcls"
      },
      /* 7 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-95092bef",
        "Region": "us-east-1",
        "Associations": [],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-08c50072",
        "type": "NetworkAcls"
      },
      /* 8 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-168cfe71",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-32351548",
            "NetworkAclId": "acl-168cfe71",
            "SubnetId": "subnet-74270f2c"
          },
          {
            "NetworkAclAssociationId": "aclassoc-02012078",
            "NetworkAclId": "acl-168cfe71",
            "SubnetId": "subnet-ee686ed3"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-0e9d1369",
        "type": "NetworkAcls"
      },
      /* 9 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-7004dc09",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-038eb572",
            "NetworkAclId": "acl-7004dc09",
            "SubnetId": "subnet-69d9890c"
          },
          {
            "NetworkAclAssociationId": "aclassoc-54ffff27",
            "NetworkAclId": "acl-7004dc09",
            "SubnetId": "subnet-5631a95a"
          },
          {
            "NetworkAclAssociationId": "aclassoc-1d89b26c",
            "NetworkAclId": "acl-7004dc09",
            "SubnetId": "subnet-9def08b1"
          },
          {
            "NetworkAclAssociationId": "aclassoc-858bb0f4",
            "NetworkAclId": "acl-7004dc09",
            "SubnetId": "subnet-d698e3ea"
          },
          {
            "NetworkAclAssociationId": "aclassoc-a394afd2",
            "NetworkAclId": "acl-7004dc09",
            "SubnetId": "subnet-53bdaf08"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-48bdbd2e",
        "type": "NetworkAcls"
      },
      /* 10 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-ed0f588a",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-19f21a64",
            "NetworkAclId": "acl-ed0f588a",
            "SubnetId": "subnet-7ba3ab46"
          },
          {
            "NetworkAclAssociationId": "aclassoc-67c32b1a",
            "NetworkAclId": "acl-ed0f588a",
            "SubnetId": "subnet-2b132973"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-ce5036a9",
        "type": "NetworkAcls"
      },
      /* 11 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-094a7effd0b6f5da2",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-067aaa731a5768839",
            "NetworkAclId": "acl-094a7effd0b6f5da2",
            "SubnetId": "subnet-0067cc3547450ee54"
          },
          {
            "NetworkAclAssociationId": "aclassoc-0b18c4367a86795b1",
            "NetworkAclId": "acl-094a7effd0b6f5da2",
            "SubnetId": "subnet-0b608080884771161"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-0e040df70dd54bb47",
        "type": "NetworkAcls"
      },
      /* 12 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-389d1841",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-e26bc192",
            "NetworkAclId": "acl-389d1841",
            "SubnetId": "subnet-a4dfa5ed"
          }
        ],
        "Entries": [
          {
            "Egress": true,
            "Ipv6CidrBlock": "::/0",
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 101
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "Egress": true,
            "Ipv6CidrBlock": "::/0",
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32768
          },
          {
            "Egress": false,
            "Ipv6CidrBlock": "::/0",
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 101
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "Egress": false,
            "Ipv6CidrBlock": "::/0",
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32768
          }
        ],
        "IsDefault": false,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [
          {
            "Key": "Name",
            "Value": "eng_sandbox_subnet_ipv6"
          }
        ],
        "VpcId": "vpc-79b6931d",
        "type": "NetworkAcls"
      },
      /* 13 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-cdabc7a9",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-49402030",
            "NetworkAclId": "acl-cdabc7a9",
            "SubnetId": "subnet-18c1156e"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-8ee872ea",
        "type": "NetworkAcls"
      },
      /* 14 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-feeafa9b",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-fe8c1f84",
            "NetworkAclId": "acl-feeafa9b",
            "SubnetId": "subnet-9287d8ca"
          },
          {
            "NetworkAclAssociationId": "aclassoc-7f90ca18",
            "NetworkAclId": "acl-feeafa9b",
            "SubnetId": "subnet-4afbdd3d"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-ff07169a",
        "type": "NetworkAcls"
      },
      /* 15 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-f5a8e48d",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-9d7496ea",
            "NetworkAclId": "acl-f5a8e48d",
            "SubnetId": "subnet-9ebe67a1"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-552fe52d",
        "type": "NetworkAcls"
      },
      /* 16 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-8387e2e7",
        "Region": "us-east-1",
        "Associations": [],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-e4bd2f80",
        "type": "NetworkAcls"
      },
      /* 17 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-8cba7ff6",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-04839e4f",
            "NetworkAclId": "acl-8cba7ff6",
            "SubnetId": "subnet-33678154"
          },
          {
            "NetworkAclAssociationId": "aclassoc-77b7aa3c",
            "NetworkAclId": "acl-8cba7ff6",
            "SubnetId": "subnet-64e1ee39"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-955f32ee",
        "type": "NetworkAcls"
      },
      /* 18 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-5201b936",
        "Region": "us-east-1",
        "Associations": [],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-03a91467",
        "type": "NetworkAcls"
      },
      /* 19 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-7ca54805",
        "Region": "us-east-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-0f76ba7e",
            "NetworkAclId": "acl-7ca54805",
            "SubnetId": "subnet-71364714"
          },
          {
            "NetworkAclAssociationId": "aclassoc-f8d11b89",
            "NetworkAclId": "acl-7ca54805",
            "SubnetId": "subnet-bd192fe6"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-6f3c6c09",
        "type": "NetworkAcls"
      },
      /* 20 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-a400e8cd",
        "Region": "us-east-2",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-c69a6caf",
            "NetworkAclId": "acl-a400e8cd",
            "SubnetId": "subnet-9a1c35d0"
          },
          {
            "NetworkAclAssociationId": "aclassoc-c49a6cad",
            "NetworkAclId": "acl-a400e8cd",
            "SubnetId": "subnet-b47f88dd"
          },
          {
            "NetworkAclAssociationId": "aclassoc-c79a6cae",
            "NetworkAclId": "acl-a400e8cd",
            "SubnetId": "subnet-d7d8d1af"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-bacb23d3",
        "type": "NetworkAcls"
      },
      /* 21 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-960d4ffe",
        "Region": "us-east-2",
        "Associations": [],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-f895f690",
        "type": "NetworkAcls"
      },
      /* 22 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-c49162a1",
        "Region": "us-west-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-dd00cbb8",
            "NetworkAclId": "acl-c49162a1",
            "SubnetId": "subnet-851fdde0"
          },
          {
            "NetworkAclAssociationId": "aclassoc-d200cbb7",
            "NetworkAclId": "acl-c49162a1",
            "SubnetId": "subnet-a52321e3"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-33be4f56",
        "type": "NetworkAcls"
      },
      /* 23 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-f2a36a97",
        "Region": "us-west-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-828839e7",
            "NetworkAclId": "acl-f2a36a97",
            "SubnetId": "subnet-0a2af06f"
          },
          {
            "NetworkAclAssociationId": "aclassoc-808839e5",
            "NetworkAclId": "acl-f2a36a97",
            "SubnetId": "subnet-3d001a7b"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-4bd8152e",
        "type": "NetworkAcls"
      },
      /* 24 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-a7df79c2",
        "Region": "us-west-2",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-1ca88d79",
            "NetworkAclId": "acl-a7df79c2",
            "SubnetId": "subnet-d722fda0"
          },
          {
            "NetworkAclAssociationId": "aclassoc-1fa88d7a",
            "NetworkAclId": "acl-a7df79c2",
            "SubnetId": "subnet-db24d882"
          },
          {
            "NetworkAclAssociationId": "aclassoc-1da88d78",
            "NetworkAclId": "acl-a7df79c2",
            "SubnetId": "subnet-db259cbe"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-859235e0",
        "type": "NetworkAcls"
      },
      /* 25 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-32cbaa55",
        "Region": "us-west-2",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-88b0d5f3",
            "NetworkAclId": "acl-32cbaa55",
            "SubnetId": "subnet-7d82511a"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-9ec67bf9",
        "type": "NetworkAcls"
      },
      /* 26 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-6c01f505",
        "Region": "eu-north-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-18cb0071",
            "NetworkAclId": "acl-6c01f505",
            "SubnetId": "subnet-22e7d068"
          },
          {
            "NetworkAclAssociationId": "aclassoc-1bcb0072",
            "NetworkAclId": "acl-6c01f505",
            "SubnetId": "subnet-8a6983e3"
          },
          {
            "NetworkAclAssociationId": "aclassoc-1acb0073",
            "NetworkAclId": "acl-6c01f505",
            "SubnetId": "subnet-dfadb8a7"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-8abe4ae3",
        "type": "NetworkAcls"
      },
      /* 27 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-7512f41c",
        "Region": "ap-south-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-aaf6acc0",
            "NetworkAclId": "acl-7512f41c",
            "SubnetId": "subnet-047c607c"
          },
          {
            "NetworkAclAssociationId": "aclassoc-489e7f21",
            "NetworkAclId": "acl-7512f41c",
            "SubnetId": "subnet-3c866055"
          },
          {
            "NetworkAclAssociationId": "aclassoc-499e7f20",
            "NetworkAclId": "acl-7512f41c",
            "SubnetId": "subnet-d6c5e59c"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-950ee8fc",
        "type": "NetworkAcls"
      },
      /* 28 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-05b1716c",
        "Region": "eu-west-3",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-e06fd689",
            "NetworkAclId": "acl-05b1716c",
            "SubnetId": "subnet-0608137e"
          },
          {
            "NetworkAclAssociationId": "aclassoc-e16fd688",
            "NetworkAclId": "acl-05b1716c",
            "SubnetId": "subnet-f728ef9e"
          },
          {
            "NetworkAclAssociationId": "aclassoc-e36fd68a",
            "NetworkAclId": "acl-05b1716c",
            "SubnetId": "subnet-6fcbf525"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-6eda2007",
        "type": "NetworkAcls"
      },
      /* 29 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-34e1145d",
        "Region": "eu-west-2",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-dbcd33b2",
            "NetworkAclId": "acl-34e1145d",
            "SubnetId": "subnet-77a7b80f"
          },
          {
            "NetworkAclAssociationId": "aclassoc-f840bd93",
            "NetworkAclId": "acl-34e1145d",
            "SubnetId": "subnet-7d986014"
          },
          {
            "NetworkAclAssociationId": "aclassoc-dacd33b3",
            "NetworkAclId": "acl-34e1145d",
            "SubnetId": "subnet-c1f5c68b"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-b7f90cde",
        "type": "NetworkAcls"
      },
      /* 30 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-33ca035a",
        "Region": "eu-west-2",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-2f972346",
            "NetworkAclId": "acl-33ca035a",
            "SubnetId": "subnet-e80015a2"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-52f33c3b",
        "type": "NetworkAcls"
      },
      /* 31 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-ca50bdae",
        "Region": "eu-west-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-eb18288c",
            "NetworkAclId": "acl-ca50bdae",
            "SubnetId": "subnet-ad80aaf4"
          },
          {
            "NetworkAclAssociationId": "aclassoc-ed18288a",
            "NetworkAclId": "acl-ca50bdae",
            "SubnetId": "subnet-44ed1820"
          },
          {
            "NetworkAclAssociationId": "aclassoc-ec18288b",
            "NetworkAclId": "acl-ca50bdae",
            "SubnetId": "subnet-a8a9bbdf"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-d32122b6",
        "type": "NetworkAcls"
      },
      /* 32 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-398c5b50",
        "Region": "ap-northeast-2",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-76f9401f",
            "NetworkAclId": "acl-398c5b50",
            "SubnetId": "subnet-6f588d06"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-0e9b5167",
        "type": "NetworkAcls"
      },
      /* 33 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-38896451",
        "Region": "ap-northeast-2",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-213dd348",
            "NetworkAclId": "acl-38896451",
            "SubnetId": "subnet-02bf5d6b"
          },
          {
            "NetworkAclAssociationId": "aclassoc-203dd349",
            "NetworkAclId": "acl-38896451",
            "SubnetId": "subnet-90ae82da"
          },
          {
            "NetworkAclAssociationId": "aclassoc-97c7a3fa",
            "NetworkAclId": "acl-38896451",
            "SubnetId": "subnet-d268aba9"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-530def3a",
        "type": "NetworkAcls"
      },
      /* 34 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-916b86f8",
        "Region": "ca-central-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-1fe90076",
            "NetworkAclId": "acl-916b86f8",
            "SubnetId": "subnet-79949901"
          },
          {
            "NetworkAclAssociationId": "aclassoc-1ee90077",
            "NetworkAclId": "acl-916b86f8",
            "SubnetId": "subnet-2a977a43"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-9c6e83f5",
        "type": "NetworkAcls"
      },
      /* 35 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-0db69b2759fc7b038",
        "Region": "ap-southeast-2",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-01127dbec549d2927",
            "NetworkAclId": "acl-0db69b2759fc7b038",
            "SubnetId": "subnet-02a6489dede996e29"
          },
          {
            "NetworkAclAssociationId": "aclassoc-0eda64a481a6041cc",
            "NetworkAclId": "acl-0db69b2759fc7b038",
            "SubnetId": "subnet-027223f1c2cc2545c"
          },
          {
            "NetworkAclAssociationId": "aclassoc-0ebff20873bfbf3de",
            "NetworkAclId": "acl-0db69b2759fc7b038",
            "SubnetId": "subnet-0b7eeb7e3f96f6acb"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-0ec7081ed2ed19d35",
        "type": "NetworkAcls"
      },
      /* 36 */
      {
        "AccountId": 740934760981.0,
        "NetworkAclId": "acl-f014f399",
        "Region": "eu-central-1",
        "Associations": [
          {
            "NetworkAclAssociationId": "aclassoc-e43edf8d",
            "NetworkAclId": "acl-f014f399",
            "SubnetId": "subnet-6acbca12"
          },
          {
            "NetworkAclAssociationId": "aclassoc-e73edf8e",
            "NetworkAclId": "acl-f014f399",
            "SubnetId": "subnet-1261877b"
          },
          {
            "NetworkAclAssociationId": "aclassoc-23fd9049",
            "NetworkAclId": "acl-f014f399",
            "SubnetId": "subnet-3b8baa71"
          }
        ],
        "Entries": [
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": true,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "allow",
            "RuleNumber": 100
          },
          {
            "CidrBlock": "0.0.0.0/0",
            "Egress": false,
            "Protocol": "-1",
            "RuleAction": "deny",
            "RuleNumber": 32767
          }
        ],
        "IsDefault": true,
        "Latest": true,
        "OwnerId": "740934760981",
        "Tags": [],
        "VpcId": "vpc-6e6d8a07",
        "type": "NetworkAcls"
      }
    ],
    NatGateways: [],
    Instances: [
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-a9a314d0",
        "Region": "us-east-1",
        "ImageId": "ami-05355a6c",
        "InstanceType": "m1.small",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.044,
        "PrivateIpAddress": "10.143.245.235",
        "PublicDnsName": "ec2-54-145-9-163.compute-1.amazonaws.com",
        "PublicIpAddress": "54.145.9.163",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "ShortName",
            "Value": "maven"
          },
          {
            "Key": "Name",
            "Value": "maven-snap-build-system"
          },
          {
            "Key": "Migrator",
            "Value": "ajay"
          },
          {
            "Key": "Purpose",
            "Value": "maven"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-3cf81950",
        "Region": "us-east-1",
        "ImageId": "ami-5dfc9634",
        "InstanceType": "m3.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.266,
        "PrivateIpAddress": "10.156.29.233",
        "PublicDnsName": "ec2-54-234-44-46.compute-1.amazonaws.com",
        "PublicIpAddress": "54.234.44.46",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "snapdev"
          },
          {
            "Key": "Name",
            "Value": "hp-vertica-dev"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-d65531ab",
        "Region": "us-east-1",
        "ImageId": "ami-43315d2a",
        "InstanceType": "m1.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.175,
        "PrivateIpAddress": "10.179.188.170",
        "PublicDnsName": "ec2-54-234-49-117.compute-1.amazonaws.com",
        "PublicIpAddress": "54.234.49.117",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "Mongodb-snapdev (snapqamongo.clouddev.snaplogic.com)"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-f85e9282",
        "Region": "us-east-1",
        "ImageId": "ami-e565ba8c",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.233.140.248",
        "PublicDnsName": "ec2-3-84-61-132.compute-1.amazonaws.com",
        "PublicIpAddress": "3.84.61.132",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "ShortName",
            "Value": "dev-test2"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "ajay"
          },
          {
            "Key": "Name",
            "Value": "dev-test2"
          },
          {
            "Key": "flavor",
            "Value": "default"
          },
          {
            "Key": "pod",
            "Value": "dev-pod1"
          },
          {
            "Key": "fqdn",
            "Value": "dev-test2.clouddev.snaplogic.com"
          },
          {
            "Key": "role",
            "Value": "testcentral"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-8cbed0ea",
        "Region": "us-east-1",
        "ImageId": "ami-05355a6c",
        "InstanceType": "m3.medium",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.067,
        "PrivateIpAddress": "10.237.14.125",
        "PublicDnsName": "ec2-54-80-223-136.compute-1.amazonaws.com",
        "PublicIpAddress": "54.80.223.136",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "ajay"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "fqdn",
            "Value": "cidev-proxy-server.clouddev.snaplogic.com"
          },
          {
            "Key": "flavor",
            "Value": "default"
          },
          {
            "Key": "ShortName",
            "Value": "cidev-proxy-server"
          },
          {
            "Key": "Name",
            "Value": "cidev-proxy-server"
          },
          {
            "Key": "pod",
            "Value": "david-pod1"
          },
          {
            "Key": "role",
            "Value": "general"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 6 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-f5477989",
        "Region": "us-east-1",
        "ImageId": "ami-e565ba8c",
        "InstanceType": "m1.medium",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.087,
        "PrivateIpAddress": "10.137.51.62",
        "PublicDnsName": "ec2-54-225-9-42.compute-1.amazonaws.com",
        "PublicIpAddress": "54.225.9.42",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "fqdn",
            "Value": "dev-db2.clouddev.snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "ajay"
          },
          {
            "Key": "ShortName",
            "Value": "dev-db2"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "dev-db2"
          },
          {
            "Key": "flavor",
            "Value": "default"
          },
          {
            "Key": "pod",
            "Value": "dev-pod1"
          },
          {
            "Key": "role",
            "Value": "mongoreplica"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 7 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-f11a248d",
        "Region": "us-east-1",
        "ImageId": "ami-e565ba8c",
        "InstanceType": "m1.medium",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.087,
        "PrivateIpAddress": "10.158.28.206",
        "PublicDnsName": "ec2-54-242-205-67.compute-1.amazonaws.com",
        "PublicIpAddress": "54.242.205.67",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "flavor",
            "Value": "default"
          },
          {
            "Key": "fqdn",
            "Value": "dev-db1.clouddev.snaplogic.com"
          },
          {
            "Key": "role",
            "Value": "mongoreplica"
          },
          {
            "Key": "ShortName",
            "Value": "dev-db1"
          },
          {
            "Key": "pod",
            "Value": "dev-pod1"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "dev-db1"
          },
          {
            "Key": "Migrator",
            "Value": "ajay"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 8 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-07139a78",
        "Region": "us-east-1",
        "ImageId": "ami-e565ba8c",
        "InstanceType": "m1.small",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.044,
        "PrivateIpAddress": "10.229.23.109",
        "PublicDnsName": "ec2-54-196-159-75.compute-1.amazonaws.com",
        "PublicIpAddress": "54.196.159.75",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "role",
            "Value": "sldb"
          },
          {
            "Key": "flavor",
            "Value": "default"
          },
          {
            "Key": "pod",
            "Value": "dev-pod1"
          },
          {
            "Key": "Name",
            "Value": "dev-sldb2"
          },
          {
            "Key": "fqdn",
            "Value": "dev-sldb2.clouddev.snaplogic.com"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "ShortName",
            "Value": "dev-sldb2"
          },
          {
            "Key": "Migrator",
            "Value": "ajay"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 9 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-606c9801",
        "Region": "us-east-1",
        "ImageId": "ami-54cf5c3d",
        "InstanceType": "m1.small",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.044,
        "PrivateIpAddress": "10.166.226.241",
        "PublicDnsName": "ec2-100-27-43-7.compute-1.amazonaws.com",
        "PublicIpAddress": "100.27.43.7",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "role",
            "Value": "sldb"
          },
          {
            "Key": "ShortName",
            "Value": "prov-sldb1"
          },
          {
            "Key": "fqdn",
            "Value": "prov-sldb1.clouddev.snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "ajay"
          },
          {
            "Key": "flavor",
            "Value": "default"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "pod",
            "Value": "prov"
          },
          {
            "Key": "Name",
            "Value": "prov-sldb1"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 10 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-1906e8f1",
        "Region": "us-east-1",
        "ImageId": "ami-6224a40a",
        "InstanceType": "m1.medium",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.087,
        "PrivateIpAddress": "10.137.96.181",
        "PublicDnsName": "ec2-54-237-159-241.compute-1.amazonaws.com",
        "PublicIpAddress": "54.237.159.241",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "jira qa-pg (qa-postgresql.clouddev.snaplogic.com)"
          },
          {
            "Key": "Migrator",
            "Value": "mbowen"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 11 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-defeb1f2",
        "Region": "us-east-1",
        "ImageId": "ami-8ddfe4e4",
        "InstanceType": "m3.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": "windows",
        "Price": 0.518,
        "PrivateIpAddress": "10.167.178.153",
        "PublicDnsName": "ec2-54-204-182-229.compute-1.amazonaws.com",
        "PublicIpAddress": "54.204.182.229",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "automation - canary (sgrid.clouddev.snaplogic.com)-AJEESH"
          },
          {
            "Key": "Migrator",
            "Value": "ajeesh"
          },
          {
            "Key": "Server Name",
            "Value": "sgrid.clouddev.snaplogic.com"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Requestor",
            "Value": "Sunil Kumar Darshanam"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 12 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-00816aea",
        "Region": "us-east-1",
        "ImageId": "ami-7622a71e",
        "InstanceType": "m1.small",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.044,
        "PrivateIpAddress": "10.69.82.137",
        "PublicDnsName": "ec2-54-167-73-95.compute-1.amazonaws.com",
        "PublicIpAddress": "54.167.73.95",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "puppet-dev-snap-build-system"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "mbowen"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 13 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-94cde47e",
        "Region": "us-east-1",
        "ImageId": "ami-488e1620",
        "InstanceType": "m3.2xlarge",
        "KeyName": "jenkins",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.183.83.13",
        "PublicDnsName": "ec2-54-163-248-124.compute-1.amazonaws.com",
        "PublicIpAddress": "54.163.248.124",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Purpose",
            "Value": "CI"
          },
          {
            "Key": "fqdn",
            "Value": "jenkins.clouddev.snaplogic.com"
          },
          {
            "Key": "ShortName",
            "Value": "Jenkins"
          },
          {
            "Key": "Name",
            "Value": "Jenkins-snap-build-system"
          },
          {
            "Key": "Migrator",
            "Value": "ajay"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 14 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-fca7f8d3",
        "Region": "us-east-1",
        "ImageId": "ami-188ac270",
        "InstanceType": "m3.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": "windows",
        "Price": 0.518,
        "PrivateIpAddress": "10.182.65.87",
        "PublicDnsName": "ec2-54-160-110-244.compute-1.amazonaws.com",
        "PublicIpAddress": "54.160.110.244",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "snap-win2k8-gplex"
          },
          {
            "Key": "Snapplex",
            "Value": "win-6mq3ifukj8l"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Environment",
            "Value": "allbulkload"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 15 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-45e3f965",
        "Region": "us-east-1",
        "ImageId": "ami-05355a6c",
        "InstanceType": "m1.small",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.044,
        "PrivateIpAddress": "10.159.202.49",
        "PublicDnsName": "ec2-54-175-217-218.compute-1.amazonaws.com",
        "PublicIpAddress": "54.175.217.218",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "prov-sldb2"
          },
          {
            "Key": "flavor",
            "Value": "default"
          },
          {
            "Key": "Migrator",
            "Value": "ajay"
          },
          {
            "Key": "ShortName",
            "Value": "prov-sldb2"
          },
          {
            "Key": "fqdn",
            "Value": "prov-sldb2.clouddev.snaplogic.com"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "pod",
            "Value": "prov"
          },
          {
            "Key": "role",
            "Value": "sldb"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 16 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-e0f89511",
        "Region": "us-east-1",
        "ImageId": "ami-08842d60",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.97.149.88",
        "PublicDnsName": "ec2-54-211-230-152.compute-1.amazonaws.com",
        "PublicIpAddress": "54.211.230.152",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "HDFSftpSMBjms"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "mbowen"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 17 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-9b5cd463",
        "Region": "us-east-1",
        "ImageId": "ami-08842d60",
        "InstanceType": "m3.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.266,
        "PrivateIpAddress": "10.168.66.152",
        "PublicDnsName": "ec2-54-237-1-96.compute-1.amazonaws.com",
        "PublicIpAddress": "54.237.1.96",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "flavor",
            "Value": "default"
          },
          {
            "Key": "fqdn",
            "Value": "cidevxl.clouddev.snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "ajay"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "cidevxl"
          },
          {
            "Key": "role",
            "Value": "mega"
          },
          {
            "Key": "ShortName",
            "Value": "cidevxl"
          },
          {
            "Key": "pod",
            "Value": "cidevxl"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 18 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-48bf2bb0",
        "Region": "us-east-1",
        "ImageId": "ami-2051294a",
        "InstanceType": "t2.micro",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.0116,
        "PrivateIpAddress": "10.0.112.44",
        "PublicDnsName": "",
        "PublicIpAddress": null,
        "State": {
          "Code": 80,
          "Name": "stopped"
        },
        "SubnetId": "subnet-479c047a",
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "ajay"
          },
          {
            "Key": "Name",
            "Value": "LetsEncryptDNS"
          },
          {
            "Key": "admin-schedule-status",
            "Value": "stopped"
          },
          {
            "Key": "FQDN",
            "Value": "testpod.localdev.snaplogic.com"
          },
          {
            "Key": "Owner",
            "Value": "Victor Du"
          },
          {
            "Key": "admin-schedule",
            "Value": "sanmateo-office-hours"
          }
        ],
        "VpcId": "vpc-9b5f10ff",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 19 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-bae40623",
        "Region": "us-east-1",
        "ImageId": "ami-08842d60",
        "InstanceType": "m3.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.266,
        "PrivateIpAddress": "10.136.157.28",
        "PublicDnsName": "ec2-54-221-9-2.compute-1.amazonaws.com",
        "PublicIpAddress": "54.221.9.2",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "flavor",
            "Value": "default"
          },
          {
            "Key": "Name",
            "Value": "cidevxl-fm"
          },
          {
            "Key": "Migrator",
            "Value": "ajay"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "fqdn",
            "Value": "cidevxl-fm.clouddev.snaplogic.com"
          },
          {
            "Key": "ShortName",
            "Value": "cidevxl-fm"
          },
          {
            "Key": "role",
            "Value": "jcc"
          },
          {
            "Key": "pod",
            "Value": "cidevxl"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 20 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-6ee406f7",
        "Region": "us-east-1",
        "ImageId": "ami-08842d60",
        "InstanceType": "m3.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.266,
        "PrivateIpAddress": "10.61.192.146",
        "PublicDnsName": "ec2-50-17-91-15.compute-1.amazonaws.com",
        "PublicIpAddress": "50.17.91.15",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "ajay"
          },
          {
            "Key": "role",
            "Value": "jcc"
          },
          {
            "Key": "flavor",
            "Value": "default"
          },
          {
            "Key": "Name",
            "Value": "cidevxl-proxy-sidekick"
          },
          {
            "Key": "ShortName",
            "Value": "cidevxl-proxy-sidekick"
          },
          {
            "Key": "pod",
            "Value": "cidevxl"
          },
          {
            "Key": "fqdn",
            "Value": "cidevxl-proxy-sidekick.clouddev.snaplogic.com"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 21 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-ff2716e8",
        "Region": "us-east-1",
        "ImageId": "ami-dc17aecb",
        "InstanceType": "m3.large",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.101.194.70",
        "PublicDnsName": "ec2-54-163-26-199.compute-1.amazonaws.com",
        "PublicIpAddress": "54.163.26.199",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "POD",
            "Value": "Budgy"
          },
          {
            "Key": "Name",
            "Value": "cdhfeedmaster2"
          },
          {
            "Key": "Migrator",
            "Value": "mbowen"
          },
          {
            "Key": "Org",
            "Value": "snapreduce-Development"
          },
          {
            "Key": "requester",
            "Value": "Ajeesh Varghese"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 22 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-fe2716e9",
        "Region": "us-east-1",
        "ImageId": "ami-dc17aecb",
        "InstanceType": "m3.large",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.47.153.189",
        "PublicDnsName": "ec2-54-221-48-50.compute-1.amazonaws.com",
        "PublicIpAddress": "54.221.48.50",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "snapqa?"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "cdhfeedmaster1"
          },
          {
            "Key": "POD",
            "Value": "Budgy"
          },
          {
            "Key": "Org",
            "Value": "snapreduce-Development"
          },
          {
            "Key": "requester",
            "Value": "Ajeesh Varghese"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 23 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-055406ae",
        "Region": "us-east-1",
        "ImageId": "ami-f9a2b690",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.145.152.41",
        "PublicDnsName": "ec2-54-166-54-89.compute-1.amazonaws.com",
        "PublicIpAddress": "54.166.54.89",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "snapdev-hold-for-clarity"
          },
          {
            "Key": "Name",
            "Value": "DSC-node-3old (cassandra)"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "fqdn",
            "Value": "dsc3.clouddev.snaplogic.com"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 24 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-6fb5bdcc",
        "Region": "us-east-1",
        "ImageId": "ami-d85e75b0",
        "InstanceType": "m3.large",
        "KeyName": "dev-apache",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.184.225.139",
        "PublicDnsName": "ec2-54-163-115-228.compute-1.amazonaws.com",
        "PublicIpAddress": "54.163.115.228",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "apache-qa.clouddev.snaplogic.com (apache-rest-soap-qa)-MBOWEN"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "mbowen"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 25 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-e5e9cf5a",
        "Region": "us-east-1",
        "ImageId": "ami-d85e75b0",
        "InstanceType": "m3.xlarge",
        "KeyName": "qa-platform",
        "Latest": true,
        "Platform": null,
        "Price": 0.266,
        "PrivateIpAddress": "10.13.197.135",
        "PublicDnsName": "ec2-54-87-117-139.compute-1.amazonaws.com",
        "PublicIpAddress": "54.87.117.139",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "na77sl-ibld-ux01751.clouddev.snaplogic.com   (qainfra)"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "mbowen"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 26 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-7e71fdc0",
        "Region": "us-east-1",
        "ImageId": "ami-60b6c60a",
        "InstanceType": "m3.medium",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.067,
        "PrivateIpAddress": "10.31.241.21",
        "PublicDnsName": "ec2-54-159-175-239.compute-1.amazonaws.com",
        "PublicIpAddress": "54.159.175.239",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "snapbox.clouddev.snaplogic.com"
          },
          {
            "Key": "Developer",
            "Value": "Robin Howlett"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Description",
            "Value": "SOAP Test server"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 27 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-6340f1e0",
        "Region": "us-east-1",
        "ImageId": "ami-05ebd06c",
        "InstanceType": "m3.medium",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.067,
        "PrivateIpAddress": "10.233.83.14",
        "PublicDnsName": "ec2-54-87-110-27.compute-1.amazonaws.com",
        "PublicIpAddress": "54.87.110.27",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "requester",
            "Value": "dmikhaylutsa"
          },
          {
            "Key": "Name",
            "Value": "Rabbitmq Server"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Requestor",
            "Value": "Chiranjeevi Pedamalli"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 28 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-7a5e4be2",
        "Region": "us-east-1",
        "ImageId": "ami-bc85d6d6",
        "InstanceType": "c3.4xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": "windows",
        "Price": 1.504,
        "PrivateIpAddress": "10.41.199.150",
        "PublicDnsName": "ec2-54-81-104-230.compute-1.amazonaws.com",
        "PublicIpAddress": "54.81.104.230",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Usage",
            "Value": "Tableau Server"
          },
          {
            "Key": "License",
            "Value": "Monthly @ $1,536.48"
          },
          {
            "Key": "hostname",
            "Value": "WIN-MICDDCHHLBH"
          },
          {
            "Key": "Name",
            "Value": "tableau_server_9.2-check-usage-in-product"
          },
          {
            "Key": "Migrator",
            "Value": "snapdev"
          },
          {
            "Key": "Requestor",
            "Value": "Jim Baldetti"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 29 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-2c3677b2",
        "Region": "us-east-1",
        "ImageId": "ami-08842d60",
        "InstanceType": "m3.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.266,
        "PrivateIpAddress": "10.165.170.24",
        "PublicDnsName": "ec2-54-227-137-197.compute-1.amazonaws.com",
        "PublicIpAddress": "54.227.137.197",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "cidevxl-www"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "ShortName",
            "Value": "cidevxl-www"
          },
          {
            "Key": "flavor",
            "Value": "default"
          },
          {
            "Key": "pod",
            "Value": "cidevxl"
          },
          {
            "Key": "role",
            "Value": "frontend"
          },
          {
            "Key": "Migrator",
            "Value": "ajay"
          },
          {
            "Key": "fqdn",
            "Value": "cidevxl-www.clouddev.snaplogic.com"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 30 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-ffe8d761",
        "Region": "us-east-1",
        "ImageId": "ami-8ddfe4e4",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": "windows",
        "Price": 0.259,
        "PrivateIpAddress": "10.237.194.162",
        "PublicDnsName": "ec2-23-23-5-71.compute-1.amazonaws.com",
        "PublicIpAddress": "23.23.5.71",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "ajeesh"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "automation - canary (sgrid1.clouddev.snaplogic.com)-AJEESH"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 31 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-44a69675",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.146.64.56",
        "PublicDnsName": "ec2-54-227-93-1.compute-1.amazonaws.com",
        "PublicIpAddress": "54.227.93.1",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "FQDN",
            "Value": "CDHclusterQA-1-1.clouddev.snaplogic.com"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "CDHclusterQA-1-1"
          },
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 32 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-46a69677",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.184.228.197",
        "PublicDnsName": "ec2-23-23-10-167.compute-1.amazonaws.com",
        "PublicIpAddress": "23.23.10.167",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "snapqa?"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "CDHclusterQA-1-3"
          },
          {
            "Key": "FQDN",
            "Value": "CDHclusterQA-1-3.clouddev.snaplogic.com"
          },
          {
            "Key": "content",
            "Value": "Hadoop"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 33 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-97a696a6",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.143.41.82",
        "PublicDnsName": "ec2-54-87-205-233.compute-1.amazonaws.com",
        "PublicIpAddress": "54.87.205.233",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "Migrator",
            "Value": "mbowen"
          },
          {
            "Key": "Name",
            "Value": "CDHclusterQA-3-1"
          },
          {
            "Key": "FQDN",
            "Value": "CDHclusterQA-3-1.clouddev.snaplogic.com"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 34 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-9ba696aa",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.147.84.115",
        "PublicDnsName": "ec2-34-238-117-80.compute-1.amazonaws.com",
        "PublicIpAddress": "34.238.117.80",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "Name",
            "Value": "CDHclusterQA-4-2"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "FQDN",
            "Value": "CDHclusterQA-4-2.clouddev.snaplogic.com"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 35 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-9aa696ab",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.7.247.29",
        "PublicDnsName": "ec2-54-175-168-79.compute-1.amazonaws.com",
        "PublicIpAddress": "54.175.168.79",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Name",
            "Value": "CDHclusterQA-4-1"
          },
          {
            "Key": "FQDN",
            "Value": "CDHclusterQA-4-1.clouddev.snaplogic.com"
          },
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 36 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-9da696ac",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.230.87.20",
        "PublicDnsName": "ec2-54-211-43-108.compute-1.amazonaws.com",
        "PublicIpAddress": "54.211.43.108",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "FQDN",
            "Value": "CDHclusterQA-4-4.clouddev.snaplogic.com"
          },
          {
            "Key": "Name",
            "Value": "CDHclusterQA-4-4"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 37 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-9ca696ad",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.30.10.139",
        "PublicDnsName": "ec2-3-91-134-25.compute-1.amazonaws.com",
        "PublicIpAddress": "3.91.134.25",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "FQDN",
            "Value": "CDHclusterQA-4-3.clouddev.snaplogic.com"
          },
          {
            "Key": "Name",
            "Value": "CDHclusterQA-4-3"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 38 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-9fa696ae",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.143.39.235",
        "PublicDnsName": "ec2-54-211-156-20.compute-1.amazonaws.com",
        "PublicIpAddress": "54.211.156.20",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "fqdn",
            "Value": "CDHclusterQA-4-6.clouddev.snaplogic.com"
          },
          {
            "Key": "Name",
            "Value": "CDHclusterQA-4-6"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 39 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-9ea696af",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.156.18.254",
        "PublicDnsName": "ec2-54-204-174-162.compute-1.amazonaws.com",
        "PublicIpAddress": "54.204.174.162",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Name",
            "Value": "CDHclusterQA-4-5"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "FQDN",
            "Value": "CDHclusterQA-4-5.clouddev.snaplogic.com"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 40 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-5e93d548",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "r3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.665,
        "PrivateIpAddress": "10.71.208.176",
        "PublicDnsName": "ec2-3-93-50-111.compute-1.amazonaws.com",
        "PublicIpAddress": "3.93.50.111",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "FQDN",
            "Value": "datalakecdh-1.fullsail.snaplogic.com"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "rpramanik"
          },
          {
            "Key": "Name",
            "Value": "datalakecdh-4"
          },
          {
            "Key": "content",
            "Value": "Hadoop"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 41 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-5f93d549",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "r3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.665,
        "PrivateIpAddress": "10.187.73.147",
        "PublicDnsName": "ec2-35-168-10-13.compute-1.amazonaws.com",
        "PublicIpAddress": "35.168.10.13",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "Migrator",
            "Value": "rpramanik"
          },
          {
            "Key": "Name",
            "Value": "datalakecdh-5"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "FQDN",
            "Value": "datalakecdh-1.fullsail.snaplogic.com"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 42 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-5b93d54d",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "r3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.665,
        "PrivateIpAddress": "10.141.17.243",
        "PublicDnsName": "ec2-54-87-147-182.compute-1.amazonaws.com",
        "PublicIpAddress": "54.87.147.182",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "rpramanik"
          },
          {
            "Key": "Name",
            "Value": "datalakecdh-3"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "FQDN",
            "Value": "datalakecdh-1.fullsail.snaplogic.com"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 43 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-5893d54e",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "r3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.665,
        "PrivateIpAddress": "10.178.92.37",
        "PublicDnsName": "ec2-3-89-202-101.compute-1.amazonaws.com",
        "PublicIpAddress": "3.89.202.101",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "mbowen"
          },
          {
            "Key": "FQDN",
            "Value": "datalakecdh-1.fullsail.snaplogic.com"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "datalakecdh-1-MBOWEN"
          },
          {
            "Key": "content",
            "Value": "Hadoop"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 44 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-5993d54f",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "r3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.665,
        "PrivateIpAddress": "10.165.181.234",
        "PublicDnsName": "ec2-54-91-117-52.compute-1.amazonaws.com",
        "PublicIpAddress": "54.91.117.52",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "FQDN",
            "Value": "datalakecdh-1.fullsail.snaplogic.com"
          },
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "Migrator",
            "Value": "rpramanik"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "datalakecdh-2"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 45 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-d8f3facf",
        "Region": "us-east-1",
        "ImageId": "ami-b2c2a1a5",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": "windows",
        "Price": 0.259,
        "PrivateIpAddress": "10.183.51.134",
        "PublicDnsName": "ec2-54-144-119-119.compute-1.amazonaws.com",
        "PublicIpAddress": "54.144.119.119",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Name",
            "Value": "testad1 (ad1.clouddev.snaplogic.com)(Active Directory)"
          },
          {
            "Key": "Purpose",
            "Value": "ActiveDirectory for testing"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 46 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-f52c27e2",
        "Region": "us-east-1",
        "ImageId": "ami-038f5168",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.165.106.186",
        "PublicDnsName": "ec2-54-147-135-151.compute-1.amazonaws.com",
        "PublicIpAddress": "54.147.135.151",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "testad3 (ubuntu with in AD)(ad3.clouddev.snaplogic.com)"
          },
          {
            "Key": "content",
            "Value": "IIS with Kerberos Authenication"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Purpose",
            "Value": "IIS Server"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 47 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-da02f4cc",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.150.122.92",
        "PublicDnsName": "ec2-54-226-143-25.compute-1.amazonaws.com",
        "PublicIpAddress": "54.226.143.25",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Name",
            "Value": "QA-HDP-2.3.4-SRV3"
          },
          {
            "Key": "FQDN",
            "Value": "QA-HDP-2.3.4-SRV3.clouddev.snaplogic.com"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 48 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-d802f4ce",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.35.182.161",
        "PublicDnsName": "ec2-54-235-14-53.compute-1.amazonaws.com",
        "PublicIpAddress": "54.235.14.53",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "QA-HDP-2.3.4-SRV1"
          },
          {
            "Key": "FQDN",
            "Value": "QA-HDP-2.3.4-SRV1.clouddev.snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 49 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-d902f4cf",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.63.82.108",
        "PublicDnsName": "ec2-3-91-244-50.compute-1.amazonaws.com",
        "PublicIpAddress": "3.91.244.50",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "FQDN",
            "Value": "QA-HDP-2.3.4-SRV2.clouddev.snaplogic.com"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Name",
            "Value": "QA-HDP-2.3.4-SRV2"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 50 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-f78d4ce1",
        "Region": "us-east-1",
        "ImageId": "ami-b2c2a1a5",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": "windows",
        "Price": 0.259,
        "PrivateIpAddress": "10.230.101.41",
        "PublicDnsName": "ec2-54-144-67-75.compute-1.amazonaws.com",
        "PublicIpAddress": "54.144.67.75",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "content",
            "Value": "active directory member"
          },
          {
            "Key": "FQDN",
            "Value": "ad4.clouddev.snaplogic.com"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "testad4 (ad4.clouddev.snaplogic.com)"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 51 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0a4e38e2c32771903",
        "Region": "us-east-1",
        "ImageId": "ami-abf616bd",
        "InstanceType": "m4.2xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": "windows",
        "Price": 0.768,
        "PrivateIpAddress": "10.0.0.31",
        "PublicDnsName": "ec2-34-198-236-115.compute-1.amazonaws.com",
        "PublicIpAddress": "34.198.236.115",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-ee686ed3",
        "Tags": [
          {
            "Key": "admin-schedule",
            "Value": "running"
          },
          {
            "Key": "Name",
            "Value": "WIN-Q34Q3ACU3IK.dev.dom (Dynamic crm on-premise)"
          },
          {
            "Key": "Migrator",
            "Value": "harminder"
          },
          {
            "Key": "admin-schedule-status",
            "Value": "started"
          }
        ],
        "VpcId": "vpc-0e9d1369",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 52 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0c9c7e075b094a1dd",
        "Region": "us-east-1",
        "ImageId": "ami-b73b63a0",
        "InstanceType": "m3.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.266,
        "PrivateIpAddress": "10.229.43.211",
        "PublicDnsName": "ec2-54-234-24-58.compute-1.amazonaws.com",
        "PublicIpAddress": "54.234.24.58",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "confluentkafka.clouddev.snaplogic.com"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 53 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-08be5c70c0ec165cb",
        "Region": "us-east-1",
        "ImageId": "ami-b73b63a0",
        "InstanceType": "m3.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.266,
        "PrivateIpAddress": "10.97.251.19",
        "PublicDnsName": "ec2-54-147-41-215.compute-1.amazonaws.com",
        "PublicIpAddress": "54.147.41.215",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "confluent kafka ssl"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 54 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0bf99e81e1d0a8e92",
        "Region": "us-east-1",
        "ImageId": "ami-5ac2cd4d",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.41.140.186",
        "PublicDnsName": "ec2-107-20-126-39.compute-1.amazonaws.com",
        "PublicIpAddress": "107.20.126.39",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Name",
            "Value": "testad7 (ad7.clouddev.snaplogic.com)"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 55 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-058cab586767b4403",
        "Region": "us-east-1",
        "ImageId": "ami-013e197b",
        "InstanceType": "m3.large",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": "windows",
        "Price": 0.259,
        "PrivateIpAddress": "10.148.28.68",
        "PublicDnsName": "ec2-54-211-145-44.compute-1.amazonaws.com",
        "PublicIpAddress": "54.211.145.44",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "CDHclusterQA-4-8"
          },
          {
            "Key": "Migrator",
            "Value": "snapqa?"
          },
          {
            "Key": "FQDN",
            "Value": "CDHclusterQA-4-8.clouddev.snaplogic.com"
          },
          {
            "Key": "content",
            "Value": "Hadoop"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 56 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0e626925e0d5b19ea",
        "Region": "us-east-1",
        "ImageId": "ami-c5722bbf",
        "InstanceType": "r4.2xlarge",
        "KeyName": "49151194_N_P1942559791_2018-03-26-18-11_d238ff05-a2c5-4bf9-928f-3503b452140e",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.0.44.244",
        "PublicDnsName": "",
        "PublicIpAddress": "35.173.88.84",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-9def08b1",
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "snapdev"
          },
          {
            "Key": "CAL:ACCOUNT",
            "Value": "U6GM617F6ENW:49411:SAP HANA Developer SPS12"
          },
          {
            "Key": "CAL:SOLINSTID",
            "Value": "49151194"
          },
          {
            "Key": "admin-schedule",
            "Value": "running"
          },
          {
            "Key": "CAL:TENANTNAME",
            "Value": "Development Tenant"
          },
          {
            "Key": "CAL:INSTANCEID",
            "Value": "i-0e626925e0d5b19ea"
          },
          {
            "Key": "CAL:CALID",
            "Value": "titanium|caltdc"
          },
          {
            "Key": "CAL:TENANTID",
            "Value": "U6GM617F6ENW"
          },
          {
            "Key": "CAL:USERID",
            "Value": "P1942559791"
          },
          {
            "Key": "Name",
            "Value": "SAP Hana Developer SPS12(SAP HANA)"
          },
          {
            "Key": "admin-schedule-status",
            "Value": "started"
          },
          {
            "Key": "CAL:SOLUTION",
            "Value": "SAP HANA, developer edition 1.0 SPS 12"
          }
        ],
        "VpcId": "vpc-48bdbd2e",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 57 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0562c21029a916936",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m3.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.266,
        "PrivateIpAddress": "10.33.246.99",
        "PublicDnsName": "ec2-54-159-200-73.compute-1.amazonaws.com",
        "PublicIpAddress": "54.159.200.73",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "sgrid3.clouddev.snaplogic.com"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Requestor",
            "Value": "Sunil Kumar Darshanam"
          },
          {
            "Key": "Migrator",
            "Value": "ajeesh"
          },
          {
            "Key": "Server Name",
            "Value": "sgrid3.clouddev.snaplogic.com"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 58 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-09f7e153b726bbc31",
        "Region": "us-east-1",
        "ImageId": "ami-8ddfe4e4",
        "InstanceType": "m3.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": "windows",
        "Price": 0.518,
        "PrivateIpAddress": "10.79.200.41",
        "PublicDnsName": "ec2-54-197-98-25.compute-1.amazonaws.com",
        "PublicIpAddress": "54.197.98.25",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Server Name",
            "Value": "sgrid4.clouddev.snaplogic.com"
          },
          {
            "Key": "Requestor",
            "Value": "Sunil Kumar Darshanam"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "sgrid4.clouddev.snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "ajeesh"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 59 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-06f1a93f79934ae21",
        "Region": "us-east-1",
        "ImageId": "ami-8ddfe4e4",
        "InstanceType": "m3.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": "windows",
        "Price": 0.518,
        "PrivateIpAddress": "10.164.166.61",
        "PublicDnsName": "ec2-184-73-8-97.compute-1.amazonaws.com",
        "PublicIpAddress": "184.73.8.97",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "ajeesh"
          },
          {
            "Key": "Requester",
            "Value": "Sunil Kumar Darshanam"
          },
          {
            "Key": "Server Name",
            "Value": "sgrid5.clouddev.snaplogic.com"
          },
          {
            "Key": "Name",
            "Value": "sgrid5.clouddev.snaplogic.com"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 60 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-08f1e7db5b5fdee7a",
        "Region": "us-east-1",
        "ImageId": "ami-c27337d5",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.146.168.254",
        "PublicDnsName": "ec2-34-238-118-243.compute-1.amazonaws.com",
        "PublicIpAddress": "34.238.118.243",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Name",
            "Value": "testad11 (ad11.clouddev.snaplogic.com)"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 61 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-038c8b61767e19270",
        "Region": "us-east-1",
        "ImageId": "ami-c27337d5",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.0.245",
        "PublicDnsName": "ec2-100-25-164-105.compute-1.amazonaws.com",
        "PublicIpAddress": "100.25.164.105",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-ee686ed3",
        "Tags": [
          {
            "Key": "version",
            "Value": "5x"
          },
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          },
          {
            "Key": "purpose",
            "Value": "Confluent Kafka Platform 5"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Name",
            "Value": "na77sl-gkcn-ux01764.clouddev.snaplogic.com"
          }
        ],
        "VpcId": "vpc-0e9d1369",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 62 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0a631a3833729ab60",
        "Region": "us-east-1",
        "ImageId": "ami-22ce4934",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.61.208.204",
        "PublicDnsName": "ec2-54-163-3-139.compute-1.amazonaws.com",
        "PublicIpAddress": "54.163.3.139",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "mbowen"
          },
          {
            "Key": "Name",
            "Value": "na77sl-apmq-ux01001 (Apache ActiveMQ5.9)"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 63 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-044ceb721ac0f0679",
        "Region": "us-east-1",
        "ImageId": "ami-b73b63a0",
        "InstanceType": "m3.medium",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.067,
        "PrivateIpAddress": "10.154.228.107",
        "PublicDnsName": "ec2-50-17-62-37.compute-1.amazonaws.com",
        "PublicIpAddress": "50.17.62.37",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "Confluent kafka 3.2.0"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 64 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0ae7764d76bdea3c7",
        "Region": "us-east-1",
        "ImageId": "ami-6c69137b",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.97.189.123",
        "PublicDnsName": "ec2-54-221-140-18.compute-1.amazonaws.com",
        "PublicIpAddress": "54.221.140.18",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "hostname",
            "Value": ""
          },
          {
            "Key": "Migrator",
            "Value": "harminder"
          },
          {
            "Key": "Name",
            "Value": "ta68sl-rjmq-ux01753.clouddev.snaplogic.com"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 65 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0ed33a9d72e1d5ad0",
        "Region": "us-east-1",
        "ImageId": "ami-6c69137b",
        "InstanceType": "m3.medium",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.067,
        "PrivateIpAddress": "10.37.151.184",
        "PublicDnsName": "ec2-54-90-195-69.compute-1.amazonaws.com",
        "PublicIpAddress": "54.90.195.69",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "snapdev"
          },
          {
            "Key": "Name",
            "Value": "na11sl-mysql-ux01751"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 66 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0a9f085a47663d799",
        "Region": "us-east-1",
        "ImageId": "ami-6c69137b",
        "InstanceType": "m3.medium",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.067,
        "PrivateIpAddress": "10.229.22.151",
        "PublicDnsName": "ec2-54-163-57-134.compute-1.amazonaws.com",
        "PublicIpAddress": "54.163.57.134",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "na11sl-mysql-ux01752"
          },
          {
            "Key": "Migrator",
            "Value": "mbowen"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 67 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-092948b38e30d35bd",
        "Region": "us-east-1",
        "ImageId": "ami-c6e9d9bd",
        "InstanceType": "m3.2xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": "windows",
        "Price": 1.036,
        "PrivateIpAddress": "10.181.27.22",
        "PublicDnsName": "ec2-50-19-13-118.compute-1.amazonaws.com",
        "PublicIpAddress": "50.19.13.118",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "sgrid2.clouddev.snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "ajeesh"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 68 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0a20f8200dd62a6d7",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.95.194.23",
        "PublicDnsName": "ec2-54-242-101-131.compute-1.amazonaws.com",
        "PublicIpAddress": "54.242.101.131",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "QA-HDP-2.3.4-SRV4"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 69 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-08ea6d56ff0722af7",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.158.181.217",
        "PublicDnsName": "ec2-54-147-189-157.compute-1.amazonaws.com",
        "PublicIpAddress": "54.147.189.157",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Name",
            "Value": "QA-HDP-2.3.4-SRV5"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 70 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0104f742fcf2d1f33",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.2xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.532,
        "PrivateIpAddress": "10.225.167.69",
        "PublicDnsName": "ec2-54-242-126-238.compute-1.amazonaws.com",
        "PublicIpAddress": "54.242.126.238",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "QA-HDP-2.3.4-SRV6"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 71 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0d4aabb999aee963e",
        "Region": "us-east-1",
        "ImageId": "ami-c27337d5",
        "InstanceType": "m3.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.266,
        "PrivateIpAddress": "10.169.187.242",
        "PublicDnsName": "ec2-54-234-13-63.compute-1.amazonaws.com",
        "PublicIpAddress": "54.234.13.63",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "snapdev"
          },
          {
            "Key": "Name",
            "Value": "ga77sl-gkcn-ux01751"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Server Name",
            "Value": "Confluent kafka with SASL_SSL"
          },
          {
            "Key": "fqdn",
            "Value": "ga77sl-gkcn-ux01751.clouddev.snaplogic.com"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 72 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-098dfab0b8db5f6bc",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.266,
        "PrivateIpAddress": "10.182.71.109",
        "PublicDnsName": "ec2-34-224-84-65.compute-1.amazonaws.com",
        "PublicIpAddress": "34.224.84.65",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Name",
            "Value": "QA-HDP-2.3.4-SRV7"
          },
          {
            "Key": "FQDN",
            "Value": "QA-HDP-2.3.4-SRV7.clouddev.snaplogic.com"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 73 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0b52a8b5db3d43007",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.266,
        "PrivateIpAddress": "10.79.182.226",
        "PublicDnsName": "ec2-54-91-66-42.compute-1.amazonaws.com",
        "PublicIpAddress": "54.91.66.42",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "FQDN",
            "Value": "CDHclusterQA-4-7.clouddev.snaplogic.com"
          },
          {
            "Key": "Name",
            "Value": "CDHclusterQA-4-7"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "content",
            "Value": "Hadoop"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 74 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-079f65eb22cd66d45",
        "Region": "us-east-1",
        "ImageId": "ami-6c69137b",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.165.128.187",
        "PublicDnsName": "ec2-54-166-204-11.compute-1.amazonaws.com",
        "PublicIpAddress": "54.166.204.11",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "SplunkLight.clouddev.snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 75 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-024eb00fa12dd2ba5",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.large",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.156.37.248",
        "PublicDnsName": "ec2-54-235-6-14.compute-1.amazonaws.com",
        "PublicIpAddress": "54.235.6.14",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "content",
            "Value": "CDHclusterQA-4-9"
          },
          {
            "Key": "Migrator",
            "Value": "snapqa?"
          },
          {
            "Key": "Name",
            "Value": "CDHclusterQA-4-9"
          },
          {
            "Key": "fqdn",
            "Value": "CDHclusterQA-4-9.fullsail.snaplogic.com"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 76 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-023bf8752fabc1a54",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.180.97.115",
        "PublicDnsName": "ec2-54-144-201-145.compute-1.amazonaws.com",
        "PublicIpAddress": "54.144.201.145",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "na77sl-gsdb-ux01751-shutdown"
          },
          {
            "Key": "role",
            "Value": "postgreSQL 10.x database server"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-gsdb-ux01751.clouddev.snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "Prasanna Koppishetty"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 77 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-07d4be390940bd2ae",
        "Region": "us-east-1",
        "ImageId": "ami-c27337d5",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.230.70.100",
        "PublicDnsName": "ec2-54-242-85-164.compute-1.amazonaws.com",
        "PublicIpAddress": "54.242.85.164",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Purpose",
            "Value": "DB2 for POC testing"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "na77sl-gsdb-ux01752.clouddev.snaplogic.com"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 78 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-004f3c4248afba258",
        "Region": "us-east-1",
        "ImageId": "ami-66506c1c",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.147.44.69",
        "PublicDnsName": "ec2-54-87-9-162.compute-1.amazonaws.com",
        "PublicIpAddress": "54.87.9.162",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "purpose",
            "Value": "Jenkins slave for integration"
          },
          {
            "Key": "Name",
            "Value": "na77sl-dcid-ux01751-snap-build-system"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-dcid-ux01751.clouddev.snaplogic.com"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "ajay"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 79 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-04e59debf6cf1e352",
        "Region": "us-east-1",
        "ImageId": "ami-a089e0b7",
        "InstanceType": "m3.xlarge",
        "KeyName": "CDH-Certification-2014-05-07",
        "Latest": true,
        "Platform": null,
        "Price": 0.266,
        "PrivateIpAddress": "10.156.28.131",
        "PublicDnsName": "ec2-54-147-141-218.compute-1.amazonaws.com",
        "PublicIpAddress": "54.147.141.218",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "fqdn",
            "Value": "CDHclusterQA-4-10.clouddev.snaplogic.com"
          },
          {
            "Key": "Name",
            "Value": "CDHclusterQA-4-10"
          },
          {
            "Key": "content",
            "Value": "Hadoop"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 80 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-01c902c6ab407ecaa",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.61.244.7",
        "PublicDnsName": "ec2-107-21-136-89.compute-1.amazonaws.com",
        "PublicIpAddress": "107.21.136.89",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "purpose",
            "Value": "Jenkins slave for integration"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Name",
            "Value": "na77sl-dcid-ux01752-snap-build-system"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-dcid-ux01752.clouddev.snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "ajay"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 81 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0f371ff98e5ed42b9",
        "Region": "us-east-1",
        "ImageId": "ami-059ad621a0d2eb0d1",
        "InstanceType": "m3.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": "windows",
        "Price": 0.518,
        "PrivateIpAddress": "10.71.220.14",
        "PublicDnsName": "ec2-50-17-58-124.compute-1.amazonaws.com",
        "PublicIpAddress": "50.17.58.124",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Name",
            "Value": "snapod-qa-fm(win-7sdppf8ur64)"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 82 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0eb2fba89ca3beb70",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.48.37",
        "PublicDnsName": "ec2-34-224-57-172.compute-1.amazonaws.com",
        "PublicIpAddress": "34.224.57.172",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02011.clouddev.snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02011"
          },
          {
            "Key": "role",
            "Value": "Hadoop"
          },
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 83 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0f6994dc728b0eb0c",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.147.219",
        "PublicDnsName": "ec2-3-80-123-122.compute-1.amazonaws.com",
        "PublicIpAddress": "3.80.123.122",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02010.clouddev.snaplogic.com"
          },
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02010"
          },
          {
            "Key": "role",
            "Value": "Hadoop"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 84 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-03ad7818c0bf10220",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.44.77",
        "PublicDnsName": "ec2-54-152-198-22.compute-1.amazonaws.com",
        "PublicIpAddress": "54.152.198.22",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02013"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02013.clouddev.snaplogic.com"
          },
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          },
          {
            "Key": "role",
            "Value": "Hadoop"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 85 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-012484207f2a7f361",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.90.42",
        "PublicDnsName": "ec2-3-95-66-143.compute-1.amazonaws.com",
        "PublicIpAddress": "3.95.66.143",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02014"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02014.clouddev.snaplogic.com"
          },
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "role",
            "Value": "Hadoop"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 86 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-09fdfc7d81e8c8210",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.201.217",
        "PublicDnsName": "ec2-54-89-185-166.compute-1.amazonaws.com",
        "PublicIpAddress": "54.89.185.166",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          },
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02050"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02050.clouddev.snaplogic.com"
          },
          {
            "Key": "role",
            "Value": "Hadoop"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 87 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0070b6d52002e694e",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.75.184",
        "PublicDnsName": "ec2-3-85-37-62.compute-1.amazonaws.com",
        "PublicIpAddress": "3.85.37.62",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          },
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02053"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02053.clouddev.snaplogic.com"
          },
          {
            "Key": "role",
            "Value": "Hadoop"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 88 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0426b3b15217f99af",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.70.37",
        "PublicDnsName": "ec2-54-85-57-49.compute-1.amazonaws.com",
        "PublicIpAddress": "54.85.57.49",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "role",
            "Value": "Hadoop"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02051.clouddev.snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02051"
          },
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 89 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-00dacb069dc3b95fd",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.248.212",
        "PublicDnsName": "ec2-3-87-75-77.compute-1.amazonaws.com",
        "PublicIpAddress": "3.87.75.77",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02052.clouddev.snaplogic.com"
          },
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02052"
          },
          {
            "Key": "role",
            "Value": "Hadoop"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 90 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0300fcf3653ea1b02",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.125.221",
        "PublicDnsName": "ec2-34-228-58-97.compute-1.amazonaws.com",
        "PublicIpAddress": "34.228.58.97",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02063.clouddev.snaplogic.com"
          },
          {
            "Key": "role",
            "Value": "Hadoop"
          },
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02063"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 91 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-049a7c86f8844fcd5",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.32.186",
        "PublicDnsName": "ec2-100-24-26-176.compute-1.amazonaws.com",
        "PublicIpAddress": "100.24.26.176",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02061.clouddev.snaplogic.com"
          },
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02061"
          },
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          },
          {
            "Key": "role",
            "Value": "Hadoop"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 92 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0fccb28d29f6e6a0b",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.96.67",
        "PublicDnsName": "ec2-18-215-146-70.compute-1.amazonaws.com",
        "PublicIpAddress": "18.215.146.70",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "role",
            "Value": "Hadoop"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02060.clouddev.snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          },
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02060"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 93 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-03a43526280792519",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.111.114",
        "PublicDnsName": "ec2-54-160-183-160.compute-1.amazonaws.com",
        "PublicIpAddress": "54.160.183.160",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02062.clouddev.snaplogic.com"
          },
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          },
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02062"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "role",
            "Value": "Hadoop"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 94 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-02824f2e817d2f7b6",
        "Region": "us-east-1",
        "ImageId": "ami-6c69137b",
        "InstanceType": "m3.medium",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.067,
        "PrivateIpAddress": "10.239.164.37",
        "PublicDnsName": "ec2-54-196-146-229.compute-1.amazonaws.com",
        "PublicIpAddress": "54.196.146.229",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "na11sl-mysql-ux01753"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          },
          {
            "Key": "requested-by",
            "Value": "SLDOREQ-6346, snappack testing"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 95 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-051373e848812db66",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m3.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.266,
        "PrivateIpAddress": "10.141.117.249",
        "PublicDnsName": "ec2-54-167-109-164.compute-1.amazonaws.com",
        "PublicIpAddress": "54.167.109.164",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "purpose",
            "Value": "ExpressionTestHarness Framework"
          },
          {
            "Key": "Name",
            "Value": "na77sl-dcid-ux01753-expression-harness"
          },
          {
            "Key": "Migrator",
            "Value": "choward/shantala"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-dcid-ux01753.clouddev.snaplogic.com"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 96 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0fd3bf216cc57dab1",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.205.22",
        "PublicDnsName": "ec2-54-147-214-209.compute-1.amazonaws.com",
        "PublicIpAddress": "54.147.214.209",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "role",
            "Value": "Hadoop"
          },
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02134"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02134.clouddev.snaplogic.com"
          },
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 97 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0139f05d663833266",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.224.32",
        "PublicDnsName": "ec2-18-212-98-213.compute-1.amazonaws.com",
        "PublicIpAddress": "18.212.98.213",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "owner",
            "Value": "na77sl-ihdc-ux02131.clouddev.snaplogic.com"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02131.clouddev.snaplogic.com"
          },
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02131"
          },
          {
            "Key": "role",
            "Value": "Hadoop"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 98 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0d7f6ba5007d231b5",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.53.139",
        "PublicDnsName": "ec2-3-94-98-129.compute-1.amazonaws.com",
        "PublicIpAddress": "3.94.98.129",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "role",
            "Value": "Hadoop"
          },
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02133"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02133.clouddev.snaplogic.com"
          },
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 99 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-069c86f683ee41207",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.25.199",
        "PublicDnsName": "ec2-18-232-140-183.compute-1.amazonaws.com",
        "PublicIpAddress": "18.232.140.183",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02132.clouddev.snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "role",
            "Value": "Hadoop"
          },
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02132"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 100 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-00d6e8983a1dfee50",
        "Region": "us-east-1",
        "ImageId": "ami-74d39063",
        "InstanceType": "m4.xlarge",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.0.85.141",
        "PublicDnsName": "ec2-54-236-92-34.compute-1.amazonaws.com",
        "PublicIpAddress": "54.236.92.34",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-18c1156e",
        "Tags": [
          {
            "Key": "Name",
            "Value": "na77sl-ihdc-ux02130"
          },
          {
            "Key": "owner",
            "Value": "ssahoo@snaplogic.com"
          },
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "role",
            "Value": "Hadoop"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-ihdc-ux02130.clouddev.snaplogic.com"
          }
        ],
        "VpcId": "vpc-8ee872ea",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 101 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-02ef76dcc0e5cd3db",
        "Region": "us-east-1",
        "ImageId": "ami-07b4156579ea1d7ba",
        "InstanceType": "m3.large",
        "KeyName": "tectonic4-24-12_rsa",
        "Latest": true,
        "Platform": null,
        "Price": 0.133,
        "PrivateIpAddress": "10.218.175.188",
        "PublicDnsName": "ec2-34-229-205-171.compute-1.amazonaws.com",
        "PublicIpAddress": "34.229.205.171",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Migrator",
            "Value": "ssahoo"
          },
          {
            "Key": "Name",
            "Value": "(testad) ad12.clouddev.snaplogic.com"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 102 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0a7bfacc2d789a697",
        "Region": "us-west-1",
        "ImageId": "ami-07a7e2f211861114c",
        "InstanceType": "c4.4xlarge",
        "KeyName": "qa-dev-tableau",
        "Latest": true,
        "Platform": "windows",
        "Price": 1.532,
        "PrivateIpAddress": "172.30.1.32",
        "PublicDnsName": "",
        "PublicIpAddress": "13.56.237.42",
        "State": {
          "Code": 16,
          "Name": "running"
        },
        "SubnetId": "subnet-851fdde0",
        "Tags": [
          {
            "Key": "QA Tableau Server",
            "Value": "Windows 2012 Tableau Server"
          },
          {
            "Key": "Name",
            "Value": "Tableau Server - QA/Dev - harminder"
          },
          {
            "Key": "Tableau Server",
            "Value": "Windows 2012 Tableau Server"
          }
        ],
        "VpcId": "vpc-33be4f56",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 103 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-c8449042",
        "Region": "eu-west-1",
        "ImageId": "ami-8519a9f6",
        "InstanceType": "m4.2xlarge",
        "KeyName": "Tableau Server 9.2 Ireland",
        "Latest": true,
        "Platform": "windows",
        "Price": 0.768,
        "PrivateIpAddress": "172.30.0.151",
        "PublicDnsName": "",
        "PublicIpAddress": null,
        "State": {
          "Code": 80,
          "Name": "stopped"
        },
        "SubnetId": "subnet-a8a9bbdf",
        "Tags": [
          {
            "Key": "Tableau Server",
            "Value": "Tableau Server 9.2"
          }
        ],
        "VpcId": "vpc-d32122b6",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 104 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-5834beff",
        "Region": "ap-northeast-2",
        "ImageId": "ami-81d21bef",
        "InstanceType": "m4.xlarge",
        "KeyName": "aws-ec2-dev-seol-key",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.169.0.16",
        "PublicDnsName": "",
        "PublicIpAddress": null,
        "State": {
          "Code": 80,
          "Name": "stopped"
        },
        "SubnetId": "subnet-6f588d06",
        "Tags": [
          {
            "Key": "Name",
            "Value": "irobot-seoul-proxy2"
          }
        ],
        "VpcId": "vpc-0e9b5167",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 105 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-08df4aaf",
        "Region": "ap-northeast-2",
        "ImageId": "ami-81d21bef",
        "InstanceType": "m4.xlarge",
        "KeyName": "aws-ec2-dev-seol-key",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "10.169.0.207",
        "PublicDnsName": "",
        "PublicIpAddress": null,
        "State": {
          "Code": 80,
          "Name": "stopped"
        },
        "SubnetId": "subnet-6f588d06",
        "Tags": [
          {
            "Key": "VPC",
            "Value": "SL_SEOUL_VPC"
          },
          {
            "Key": "Name",
            "Value": "irobot-seoul-proxy1"
          }
        ],
        "VpcId": "vpc-0e9b5167",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      /* 106 */
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-016a16051ce84fd73",
        "Region": "ap-southeast-2",
        "ImageId": "ami-0a64a8ce2a3c00bb3",
        "InstanceType": "m3.xlarge",
        "KeyName": "latency_test_sydney",
        "Latest": true,
        "Platform": null,
        "Price": 0.266,
        "PrivateIpAddress": null,
        "PublicDnsName": "",
        "PublicIpAddress": null,
        "State": {
          "Code": 80,
          "Name": "stopped"
        },
        "SubnetId": null,
        "Tags": [
          {
            "Key": "Name",
            "Value": "na77sl-jccs-ax02001.clouddev.snaplogic.com"
          },
          {
            "Key": "CostCenter",
            "Value": "NonVpc"
          }
        ],
        "VpcId": null,
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "low",
        "securityFindings": [
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 0,
        "securityLow": 1,
        "securityMedium": 0
      },
      {
        "AccountId": 740934760981.0,
        "InstanceId": "i-0490f6ff80cb6fa02",
        "Region": "eu-central-1",
        "ImageId": "ami-0b91c0bc24e648ce5",
        "InstanceType": "m4.xlarge",
        "KeyName": "latency_test_2910",
        "Latest": true,
        "Platform": null,
        "Price": 0.2,
        "PrivateIpAddress": "172.31.6.123",
        "PublicDnsName": "",
        "PublicIpAddress": null,
        "State": {
          "Code": 80,
          "Name": "stopped"
        },
        "SubnetId": "subnet-6acbca12",
        "Tags": [
          {
            "Key": "Name",
            "Value": "na77sl-jccs-dx02001.clouddev.snaplogic.com"
          },
          {
            "Key": "fqdn",
            "Value": "na77sl-jccs-dx02001"
          }
        ],
        "VpcId": "vpc-6e6d8a07",
        "type": "Instances",
        "complianceFindings": false,
        "missingTags": 0,
        "security": "high",
        "securityFindings": [
          {
            "Message": "Default VPC is used",
            "Action": "Use custom VPC instead of default VPC",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "high"
          },
          {
            "Message": "IAM Instance profile is not assigned",
            "Action": "Assign IAM Instance profile to the instance",
            "Benchmark": [
              "all",
              "hipaa"
            ],
            "Severity": "low"
          }
        ],
        "securityHigh": 1,
        "securityLow": 1,
        "securityMedium": 0
      }
    ],
    LoadBalancers: [
      /* 1 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "stage-fmjcc-ha-1687691047.us-east-1.elb.amazonaws.com",
        "AvailabilityZones": [
          {
            "ZoneName": "us-east-1b",
            "SubnetId": "subnet-33678154",
            "LoadBalancerAddresses": []
          },
          {
            "ZoneName": "us-east-1a",
            "SubnetId": "subnet-64e1ee39",
            "LoadBalancerAddresses": []
          }
        ],
        "CanonicalHostedZoneId": "Z35SXDOTRQ7X7K",
        "DNSName": "stage-fmjcc-ha-1687691047.us-east-1.elb.amazonaws.com",
        "IpAddressType": "ipv4",
        "Latest": true,
        "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-east-1:740934760981:loadbalancer/app/stage-fmjcc-ha/b85f80557bf18c05",
        "LoadBalancerName": "stage-fmjcc-ha",
        "Scheme": "internet-facing",
        "SecurityGroups": [
          "sg-038472b94dac53dbb"
        ],
        "State": {
          "Code": "active"
        },
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "eb70a966-c1c5-456a-9087-ce5f33b68045"
          },
          "TagDescriptions": [
            {
              "ResourceArn": "arn:aws:elasticloadbalancing:us-east-1:740934760981:loadbalancer/app/stage-fmjcc-ha/b85f80557bf18c05",
              "Tags": []
            }
          ]
        },
        "Target": [
          [
            {
              "Target": {
                "Id": "i-05909612e106ed00f",
                "Port": 8081
              },
              "HealthCheckPort": "8090",
              "TargetHealth": {
                "State": "unused",
                "Reason": "Target.InvalidState",
                "Description": "Target is in the stopped state"
              },
              "type": "instance"
            },
            {
              "Target": {
                "Id": "i-08319da9b64efaf21",
                "Port": 8081
              },
              "HealthCheckPort": "8090",
              "TargetHealth": {
                "State": "unused",
                "Reason": "Target.InvalidState",
                "Description": "Target is in the stopped state"
              },
              "type": "instance"
            },
            {
              "Target": {
                "Id": "i-02a752d52cb4e7741",
                "Port": 8081
              },
              "HealthCheckPort": "8090",
              "TargetHealth": {
                "State": "unused",
                "Reason": "Target.InvalidState",
                "Description": "Target is in the stopped state"
              },
              "type": "instance"
            },
            {
              "Target": {
                "Id": "i-0e9afeddf485d240e",
                "Port": 8081
              },
              "HealthCheckPort": "8090",
              "TargetHealth": {
                "State": "unused",
                "Reason": "Target.InvalidState",
                "Description": "Target is in the stopped state"
              },
              "type": "instance"
            },
            {
              "Target": {
                "Id": "i-010b3f0c455c1b5e8",
                "Port": 8081
              },
              "HealthCheckPort": "8090",
              "TargetHealth": {
                "State": "unused",
                "Reason": "Target.InvalidState",
                "Description": "Target is in the stopped state"
              },
              "type": "instance"
            },
            {
              "Target": {
                "Id": "i-028f4f8f6be4228a5",
                "Port": 8081
              },
              "HealthCheckPort": "8090",
              "TargetHealth": {
                "State": "unused",
                "Reason": "Target.InvalidState",
                "Description": "Target is in the stopped state"
              },
              "type": "instance"
            }
          ]
        ],
        "Type": "application",
        "VpcId": "vpc-955f32ee",
        "access_logs": [
          {
            "Key": "access_logs.s3.enabled",
            "Value": "false"
          },
          {
            "Key": "access_logs.s3.bucket",
            "Value": ""
          },
          {
            "Key": "access_logs.s3.prefix",
            "Value": ""
          }
        ],
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "LoadBalancers"
      }
    ],
    ClassicBalancers: [
      /* 1 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "snapbox-poc-157816237.us-east-1.elb.amazonaws.com",
        "AccessLog": {
          "Enabled": false
        },
        "AvailabilityZones": [
          "us-east-1c"
        ],
        "BackendServerDescriptions": [],
        "CanonicalHostedZoneName": "snapbox-poc-157816237.us-east-1.elb.amazonaws.com",
        "CanonicalHostedZoneNameID": "Z3DZXE0Q79N41H",
        "DNSName": "snapbox-poc-157816237.us-east-1.elb.amazonaws.com",
        "HealthCheck": {
          "Target": "TCP:8080",
          "Interval": 10,
          "Timeout": 5,
          "UnhealthyThreshold": 2,
          "HealthyThreshold": 2
        },
        "InstanceStates": [
          {
            "InstanceId": "i-7e71fdc0",
            "State": "InService",
            "ReasonCode": "N/A",
            "Description": "N/A"
          }
        ],
        "Instances": [
          {
            "InstanceId": "i-7e71fdc0"
          }
        ],
        "Latest": true,
        "ListenerDescriptions": [
          {
            "Listener": {
              "Protocol": "TCP",
              "LoadBalancerPort": 443,
              "InstanceProtocol": "TCP",
              "InstancePort": 8443
            },
            "PolicyNames": []
          },
          {
            "Listener": {
              "Protocol": "TCP",
              "LoadBalancerPort": 80,
              "InstanceProtocol": "TCP",
              "InstancePort": 8080
            },
            "PolicyNames": []
          }
        ],
        "LoadBalancerName": "snapbox-poc",
        "Policies": {
          "AppCookieStickinessPolicies": [],
          "LBCookieStickinessPolicies": [],
          "OtherPolicies": [
            "ELBSecurityPolicy-2015-05"
          ]
        },
        "Scheme": "internet-facing",
        "SecurityGroups": [],
        "SourceSecurityGroup": {
          "OwnerAlias": "amazon-elb",
          "GroupName": "amazon-elb-sg"
        },
        "Subnets": [],
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "146ee9d6-c6d7-4833-a048-4613267f4392"
          },
          "TagDescriptions": [
            {
              "LoadBalancerName": "snapbox-poc",
              "Tags": [
                {
                  "Key": "Developer",
                  "Value": "Robin Howlett"
                },
                {
                  "Key": "Description",
                  "Value": "POC Testing of SnapBox with LB"
                },
                {
                  "Key": "Created by",
                  "Value": "RK"
                }
              ]
            }
          ]
        },
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "ClassicBalancers"
      },
      /* 2 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "uatv2-qa-fm2-1052205549.us-east-1.elb.amazonaws.com",
        "AccessLog": {
          "Enabled": false
        },
        "AvailabilityZones": [
          "us-east-1d"
        ],
        "BackendServerDescriptions": [],
        "CanonicalHostedZoneName": "uatv2-qa-fm2-1052205549.us-east-1.elb.amazonaws.com",
        "CanonicalHostedZoneNameID": "Z35SXDOTRQ7X7K",
        "DNSName": "uatv2-qa-fm2-1052205549.us-east-1.elb.amazonaws.com",
        "HealthCheck": {
          "Target": "HTTPS:8084/healthz",
          "Interval": 10,
          "Timeout": 5,
          "UnhealthyThreshold": 2,
          "HealthyThreshold": 2
        },
        "InstanceStates": [
          {
            "InstanceId": "i-02ecbd00113c7904a",
            "State": "OutOfService",
            "ReasonCode": "Instance",
            "Description": "Instance is in stopped state."
          }
        ],
        "Instances": [
          {
            "InstanceId": "i-02ecbd00113c7904a"
          }
        ],
        "Latest": true,
        "ListenerDescriptions": [
          {
            "Listener": {
              "Protocol": "HTTPS",
              "LoadBalancerPort": 443,
              "InstanceProtocol": "HTTPS",
              "InstancePort": 8084,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/snaplogic-io-cert-06052018"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-uatv2-qa-fm2-1502356182111"
            ]
          }
        ],
        "LoadBalancerName": "uatv2-qa-fm2",
        "Policies": {
          "AppCookieStickinessPolicies": [],
          "LBCookieStickinessPolicies": [],
          "OtherPolicies": [
            "AWSConsole-SSLNegotiationPolicy-uatv2-qa-fm2-1502356182111",
            "ELBSecurityPolicy-2016-08"
          ]
        },
        "Scheme": "internet-facing",
        "SecurityGroups": [],
        "SourceSecurityGroup": {
          "OwnerAlias": "amazon-elb",
          "GroupName": "amazon-elb-sg"
        },
        "Subnets": [],
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "b3f43423-d6b6-4f3c-b1b5-fc4920dda1b9"
          },
          "TagDescriptions": [
            {
              "LoadBalancerName": "uatv2-qa-fm2",
              "Tags": [
                {
                  "Key": "Name",
                  "Value": "uat automation org"
                }
              ]
            }
          ]
        },
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "ClassicBalancers"
      },
      /* 3 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "dev-sldb-1117237231.us-east-1.elb.amazonaws.com",
        "AccessLog": {
          "Enabled": false
        },
        "AvailabilityZones": [
          "us-east-1d"
        ],
        "BackendServerDescriptions": [],
        "CanonicalHostedZoneName": "dev-sldb-1117237231.us-east-1.elb.amazonaws.com",
        "CanonicalHostedZoneNameID": "Z35SXDOTRQ7X7K",
        "DNSName": "dev-sldb-1117237231.us-east-1.elb.amazonaws.com",
        "HealthCheck": {
          "Target": "HTTPS:443/healthz",
          "Interval": 10,
          "Timeout": 5,
          "UnhealthyThreshold": 4,
          "HealthyThreshold": 2
        },
        "InstanceStates": [
          {
            "InstanceId": "i-07139a78",
            "State": "InService",
            "ReasonCode": "N/A",
            "Description": "N/A"
          }
        ],
        "Instances": [
          {
            "InstanceId": "i-07139a78"
          }
        ],
        "Latest": true,
        "ListenerDescriptions": [
          {
            "Listener": {
              "Protocol": "HTTPS",
              "LoadBalancerPort": 443,
              "InstanceProtocol": "HTTPS",
              "InstancePort": 443,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/clouddev.snaplogic.com-20201105"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-dev-sldb-1508964225277"
            ]
          }
        ],
        "LoadBalancerName": "dev-sldb",
        "Policies": {
          "AppCookieStickinessPolicies": [],
          "LBCookieStickinessPolicies": [],
          "OtherPolicies": [
            "AWSConsole-SSLNegotiationPolicy-dev-sldb-1508951559254",
            "ELBSecurityPolicy-2016-08",
            "AWSConsole-SSLNegotiationPolicy-dev-sldb-1508964225277"
          ]
        },
        "Scheme": "internet-facing",
        "SecurityGroups": [],
        "SourceSecurityGroup": {
          "OwnerAlias": "amazon-elb",
          "GroupName": "amazon-elb-sg"
        },
        "Subnets": [],
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "5b421df1-c2e7-4098-9347-1f8571cbd6c1"
          },
          "TagDescriptions": [
            {
              "LoadBalancerName": "dev-sldb",
              "Tags": [
                {
                  "Key": "pod",
                  "Value": "DEV_PROVISIONING"
                }
              ]
            }
          ]
        },
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "ClassicBalancers"
      },
      /* 4 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "prov-sldb-1201880407.us-east-1.elb.amazonaws.com",
        "AccessLog": {
          "Enabled": false
        },
        "AvailabilityZones": [
          "us-east-1b",
          "us-east-1c"
        ],
        "BackendServerDescriptions": [],
        "CanonicalHostedZoneName": "prov-sldb-1201880407.us-east-1.elb.amazonaws.com",
        "CanonicalHostedZoneNameID": "Z35SXDOTRQ7X7K",
        "DNSName": "prov-sldb-1201880407.us-east-1.elb.amazonaws.com",
        "HealthCheck": {
          "Target": "HTTPS:443/healthz",
          "Interval": 10,
          "Timeout": 5,
          "UnhealthyThreshold": 4,
          "HealthyThreshold": 2
        },
        "InstanceStates": [
          {
            "InstanceId": "i-45e3f965",
            "State": "InService",
            "ReasonCode": "N/A",
            "Description": "N/A"
          },
          {
            "InstanceId": "i-606c9801",
            "State": "InService",
            "ReasonCode": "N/A",
            "Description": "N/A"
          }
        ],
        "Instances": [
          {
            "InstanceId": "i-45e3f965"
          },
          {
            "InstanceId": "i-606c9801"
          }
        ],
        "Latest": true,
        "ListenerDescriptions": [
          {
            "Listener": {
              "Protocol": "HTTPS",
              "LoadBalancerPort": 443,
              "InstanceProtocol": "HTTPS",
              "InstancePort": 443,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/clouddev.snaplogic.com-20201105"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-prov-sldb-1508964202000"
            ]
          }
        ],
        "LoadBalancerName": "prov-sldb",
        "Policies": {
          "AppCookieStickinessPolicies": [],
          "LBCookieStickinessPolicies": [],
          "OtherPolicies": [
            "ELBSecurityPolicy-2016-08",
            "AWSConsole-SSLNegotiationPolicy-prov-sldb-1508964202000",
            "AWSConsole-SSLNegotiationPolicy-prov-sldb-1508964190469",
            "AWSConsole-SSLNegotiationPolicy-prov-sldb-1508952153910"
          ]
        },
        "Scheme": "internet-facing",
        "SecurityGroups": [],
        "SourceSecurityGroup": {
          "OwnerAlias": "amazon-elb",
          "GroupName": "amazon-elb-sg"
        },
        "Subnets": [],
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "a13c24e2-76bc-4894-9cfc-9ecef53ad632"
          },
          "TagDescriptions": [
            {
              "LoadBalancerName": "prov-sldb",
              "Tags": [
                {
                  "Key": "POD",
                  "Value": "PROV_PROVISIONING"
                }
              ]
            }
          ]
        },
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "ClassicBalancers"
      },
      /* 5 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "uxpod-1455385442.us-east-1.elb.amazonaws.com",
        "AccessLog": {
          "Enabled": false
        },
        "AvailabilityZones": [
          "us-east-1b"
        ],
        "BackendServerDescriptions": [],
        "CanonicalHostedZoneName": "uxpod-1455385442.us-east-1.elb.amazonaws.com",
        "CanonicalHostedZoneNameID": "Z35SXDOTRQ7X7K",
        "DNSName": "uxpod-1455385442.us-east-1.elb.amazonaws.com",
        "HealthCheck": {
          "Target": "HTTPS:443/healthz",
          "Interval": 10,
          "Timeout": 5,
          "UnhealthyThreshold": 4,
          "HealthyThreshold": 2
        },
        "InstanceStates": [
          {
            "InstanceId": "i-f7ae3da6",
            "State": "OutOfService",
            "ReasonCode": "Instance",
            "Description": "Instance is in stopped state."
          }
        ],
        "Instances": [
          {
            "InstanceId": "i-f7ae3da6"
          }
        ],
        "Latest": true,
        "ListenerDescriptions": [
          {
            "Listener": {
              "Protocol": "HTTP",
              "LoadBalancerPort": 80,
              "InstanceProtocol": "HTTP",
              "InstancePort": 80
            },
            "PolicyNames": []
          },
          {
            "Listener": {
              "Protocol": "HTTPS",
              "LoadBalancerPort": 443,
              "InstanceProtocol": "HTTPS",
              "InstancePort": 443,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/clouddev.snaplogic.com-20201105"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-uxpod-1508962187093"
            ]
          }
        ],
        "LoadBalancerName": "uxpod",
        "Policies": {
          "AppCookieStickinessPolicies": [],
          "LBCookieStickinessPolicies": [],
          "OtherPolicies": [
            "AWSConsole-SSLNegotiationPolicy-uxpod-1508952245967",
            "AWSConsole-SSLNegotiationPolicy-uxpod-1508962187093",
            "ELBSecurityPolicy-2016-08"
          ]
        },
        "Scheme": "internet-facing",
        "SecurityGroups": [],
        "SourceSecurityGroup": {
          "OwnerAlias": "amazon-elb",
          "GroupName": "amazon-elb-sg"
        },
        "Subnets": [],
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "458d69b6-9f31-4f41-a42d-34fdd98dd0c5"
          },
          "TagDescriptions": [
            {
              "LoadBalancerName": "uxpod",
              "Tags": [
                {
                  "Key": "POD",
                  "Value": "ux1"
                }
              ]
            }
          ]
        },
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "ClassicBalancers"
      },
      /* 6 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "ux2pod-877295956.us-east-1.elb.amazonaws.com",
        "AccessLog": {
          "Enabled": false
        },
        "AvailabilityZones": [
          "us-east-1d"
        ],
        "BackendServerDescriptions": [],
        "CanonicalHostedZoneName": "ux2pod-877295956.us-east-1.elb.amazonaws.com",
        "CanonicalHostedZoneNameID": "Z35SXDOTRQ7X7K",
        "DNSName": "ux2pod-877295956.us-east-1.elb.amazonaws.com",
        "HealthCheck": {
          "Target": "HTTPS:443/healthz",
          "Interval": 10,
          "Timeout": 5,
          "UnhealthyThreshold": 4,
          "HealthyThreshold": 2
        },
        "InstanceStates": [],
        "Instances": [],
        "Latest": true,
        "ListenerDescriptions": [
          {
            "Listener": {
              "Protocol": "HTTP",
              "LoadBalancerPort": 80,
              "InstanceProtocol": "HTTP",
              "InstancePort": 80
            },
            "PolicyNames": []
          },
          {
            "Listener": {
              "Protocol": "HTTPS",
              "LoadBalancerPort": 443,
              "InstanceProtocol": "HTTPS",
              "InstancePort": 443,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/clouddev.snaplogic.com-20201105"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-ux2pod-1508963525151"
            ]
          }
        ],
        "LoadBalancerName": "ux2pod",
        "Policies": {
          "AppCookieStickinessPolicies": [],
          "LBCookieStickinessPolicies": [],
          "OtherPolicies": [
            "AWSConsole-SSLNegotiationPolicy-ux2pod-1508962633255",
            "AWSConsole-SSLNegotiationPolicy-ux2pod-1508952325195",
            "ELBSecurityPolicy-2016-08",
            "AWSConsole-SSLNegotiationPolicy-ux2pod-1508963525151"
          ]
        },
        "Scheme": "internet-facing",
        "SecurityGroups": [],
        "SourceSecurityGroup": {
          "OwnerAlias": "amazon-elb",
          "GroupName": "amazon-elb-sg"
        },
        "Subnets": [],
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "57aab79f-e279-40cc-9eb1-a633f2c73d00"
          },
          "TagDescriptions": [
            {
              "LoadBalancerName": "ux2pod",
              "Tags": [
                {
                  "Key": "POD",
                  "Value": "ux2"
                }
              ]
            }
          ]
        },
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "ClassicBalancers"
      },
      /* 7 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "ux3pod-1206571181.us-east-1.elb.amazonaws.com",
        "AccessLog": {
          "Enabled": false
        },
        "AvailabilityZones": [
          "us-east-1d"
        ],
        "BackendServerDescriptions": [],
        "CanonicalHostedZoneName": "ux3pod-1206571181.us-east-1.elb.amazonaws.com",
        "CanonicalHostedZoneNameID": "Z35SXDOTRQ7X7K",
        "DNSName": "ux3pod-1206571181.us-east-1.elb.amazonaws.com",
        "HealthCheck": {
          "Target": "HTTPS:443/healthz",
          "Interval": 10,
          "Timeout": 5,
          "UnhealthyThreshold": 4,
          "HealthyThreshold": 2
        },
        "InstanceStates": [],
        "Instances": [],
        "Latest": true,
        "ListenerDescriptions": [
          {
            "Listener": {
              "Protocol": "HTTPS",
              "LoadBalancerPort": 443,
              "InstanceProtocol": "HTTPS",
              "InstancePort": 443,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/clouddev.snaplogic.com-20201105"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-ux3pod-1508963537516"
            ]
          },
          {
            "Listener": {
              "Protocol": "HTTP",
              "LoadBalancerPort": 80,
              "InstanceProtocol": "HTTP",
              "InstancePort": 80
            },
            "PolicyNames": []
          }
        ],
        "LoadBalancerName": "ux3pod",
        "Policies": {
          "AppCookieStickinessPolicies": [],
          "LBCookieStickinessPolicies": [],
          "OtherPolicies": [
            "AWSConsole-SSLNegotiationPolicy-ux3pod-1508963537516",
            "AWSConsole-SSLNegotiationPolicy-ux3pod-1508952379339",
            "AWSConsole-SSLNegotiationPolicy-ux3pod-1508962649940",
            "ELBSecurityPolicy-2016-08"
          ]
        },
        "Scheme": "internet-facing",
        "SecurityGroups": [],
        "SourceSecurityGroup": {
          "OwnerAlias": "amazon-elb",
          "GroupName": "amazon-elb-sg"
        },
        "Subnets": [],
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "2b6d0151-de1d-40e3-a93a-1fb987df687d"
          },
          "TagDescriptions": [
            {
              "LoadBalancerName": "ux3pod",
              "Tags": [
                {
                  "Key": "POD",
                  "Value": "ux3"
                }
              ]
            }
          ]
        },
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "ClassicBalancers"
      },
      /* 8 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "uxpod-tcp-485136800.us-east-1.elb.amazonaws.com",
        "AccessLog": {
          "Enabled": false
        },
        "AvailabilityZones": [
          "us-east-1b"
        ],
        "BackendServerDescriptions": [],
        "CanonicalHostedZoneName": "uxpod-tcp-485136800.us-east-1.elb.amazonaws.com",
        "CanonicalHostedZoneNameID": "Z35SXDOTRQ7X7K",
        "DNSName": "uxpod-tcp-485136800.us-east-1.elb.amazonaws.com",
        "HealthCheck": {
          "Target": "HTTPS:443/status",
          "Interval": 10,
          "Timeout": 5,
          "UnhealthyThreshold": 4,
          "HealthyThreshold": 2
        },
        "InstanceStates": [
          {
            "InstanceId": "i-f7ae3da6",
            "State": "OutOfService",
            "ReasonCode": "Instance",
            "Description": "Instance is in stopped state."
          }
        ],
        "Instances": [
          {
            "InstanceId": "i-f7ae3da6"
          }
        ],
        "Latest": true,
        "ListenerDescriptions": [
          {
            "Listener": {
              "Protocol": "SSL",
              "LoadBalancerPort": 443,
              "InstanceProtocol": "SSL",
              "InstancePort": 443,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/clouddev.snaplogic.com-20201105"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-uxpod-tcp-1508962132385"
            ]
          }
        ],
        "LoadBalancerName": "uxpod-tcp",
        "Policies": {
          "AppCookieStickinessPolicies": [],
          "LBCookieStickinessPolicies": [],
          "OtherPolicies": [
            "ELBSecurityPolicy-2016-08",
            "AWSConsole-SSLNegotiationPolicy-uxpod-tcp-1508962132385",
            "AWSConsole-SSLNegotiationPolicy-uxpod-tcp-1508961314690"
          ]
        },
        "Scheme": "internet-facing",
        "SecurityGroups": [],
        "SourceSecurityGroup": {
          "OwnerAlias": "amazon-elb",
          "GroupName": "amazon-elb-sg"
        },
        "Subnets": [],
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "88c8a4d7-9795-455a-b7f5-27f7481378b2"
          },
          "TagDescriptions": [
            {
              "LoadBalancerName": "uxpod-tcp",
              "Tags": [
                {
                  "Key": "POD",
                  "Value": "uxpod"
                },
                {
                  "Key": "URL",
                  "Value": "ux-tcp.clouddev.snaplogic.com"
                },
                {
                  "Key": "Name",
                  "Value": "uxpod-tcp"
                }
              ]
            }
          ]
        },
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "ClassicBalancers"
      },
      /* 9 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "ux2pod-tcp-855589629.us-east-1.elb.amazonaws.com",
        "AccessLog": {
          "Enabled": false
        },
        "AvailabilityZones": [
          "us-east-1d",
          "us-east-1a"
        ],
        "BackendServerDescriptions": [],
        "CanonicalHostedZoneName": "ux2pod-tcp-855589629.us-east-1.elb.amazonaws.com",
        "CanonicalHostedZoneNameID": "Z35SXDOTRQ7X7K",
        "DNSName": "ux2pod-tcp-855589629.us-east-1.elb.amazonaws.com",
        "HealthCheck": {
          "Target": "HTTPS:443/status",
          "Interval": 10,
          "Timeout": 5,
          "UnhealthyThreshold": 4,
          "HealthyThreshold": 2
        },
        "InstanceStates": [],
        "Instances": [],
        "Latest": true,
        "ListenerDescriptions": [
          {
            "Listener": {
              "Protocol": "SSL",
              "LoadBalancerPort": 443,
              "InstanceProtocol": "SSL",
              "InstancePort": 443,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/clouddev.snaplogic.com-20201105"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-ux2pod-tcp-1508962996423"
            ]
          }
        ],
        "LoadBalancerName": "ux2pod-tcp",
        "Policies": {
          "AppCookieStickinessPolicies": [],
          "LBCookieStickinessPolicies": [],
          "OtherPolicies": [
            "AWSConsole-SSLNegotiationPolicy-ux2pod-tcp-1508962996423",
            "ELBSecurityPolicy-2016-08"
          ]
        },
        "Scheme": "internet-facing",
        "SecurityGroups": [],
        "SourceSecurityGroup": {
          "OwnerAlias": "amazon-elb",
          "GroupName": "amazon-elb-sg"
        },
        "Subnets": [],
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "383072b9-c445-451f-b358-1b6acb4b02da"
          },
          "TagDescriptions": [
            {
              "LoadBalancerName": "ux2pod-tcp",
              "Tags": [
                {
                  "Key": "POD",
                  "Value": "ux2"
                },
                {
                  "Key": "URL",
                  "Value": "ux2-tcp.clouddev.snaplogic.com"
                },
                {
                  "Key": "Name",
                  "Value": "ux2pod-tcp"
                }
              ]
            }
          ]
        },
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "ClassicBalancers"
      },
      /* 10 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "ux3pod-tcp-1155091806.us-east-1.elb.amazonaws.com",
        "AccessLog": {
          "Enabled": false
        },
        "AvailabilityZones": [
          "us-east-1d",
          "us-east-1a"
        ],
        "BackendServerDescriptions": [],
        "CanonicalHostedZoneName": "ux3pod-tcp-1155091806.us-east-1.elb.amazonaws.com",
        "CanonicalHostedZoneNameID": "Z35SXDOTRQ7X7K",
        "DNSName": "ux3pod-tcp-1155091806.us-east-1.elb.amazonaws.com",
        "HealthCheck": {
          "Target": "HTTPS:443/status",
          "Interval": 10,
          "Timeout": 5,
          "UnhealthyThreshold": 4,
          "HealthyThreshold": 2
        },
        "InstanceStates": [],
        "Instances": [],
        "Latest": true,
        "ListenerDescriptions": [
          {
            "Listener": {
              "Protocol": "SSL",
              "LoadBalancerPort": 443,
              "InstanceProtocol": "SSL",
              "InstancePort": 443,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/clouddev.snaplogic.com-20201105"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-ux3pod-tcp-1508963495581"
            ]
          }
        ],
        "LoadBalancerName": "ux3pod-tcp",
        "Policies": {
          "AppCookieStickinessPolicies": [],
          "LBCookieStickinessPolicies": [],
          "OtherPolicies": [
            "AWSConsole-SSLNegotiationPolicy-ux3pod-tcp-1508963495581",
            "ELBSecurityPolicy-2016-08"
          ]
        },
        "Scheme": "internet-facing",
        "SecurityGroups": [],
        "SourceSecurityGroup": {
          "OwnerAlias": "amazon-elb",
          "GroupName": "amazon-elb-sg"
        },
        "Subnets": [],
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "d0dad2a3-bcc3-4294-95f6-161a7796f4c7"
          },
          "TagDescriptions": [
            {
              "LoadBalancerName": "ux3pod-tcp",
              "Tags": [
                {
                  "Key": "POD",
                  "Value": "ux3"
                },
                {
                  "Key": "URL",
                  "Value": "ux3-tcp.clouddev.snaplogic.com"
                },
                {
                  "Key": "Name",
                  "Value": "ux3pod-tcp"
                }
              ]
            }
          ]
        },
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "ClassicBalancers"
      },
      /* 11 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "cdh-budgy-testfm-1764822280.us-east-1.elb.amazonaws.com",
        "AccessLog": {
          "Enabled": false
        },
        "AvailabilityZones": [
          "us-east-1d"
        ],
        "BackendServerDescriptions": [],
        "CanonicalHostedZoneName": "cdh-budgy-testfm-1764822280.us-east-1.elb.amazonaws.com",
        "CanonicalHostedZoneNameID": "Z35SXDOTRQ7X7K",
        "DNSName": "cdh-budgy-testfm-1764822280.us-east-1.elb.amazonaws.com",
        "HealthCheck": {
          "Target": "HTTPS:8084/healthz",
          "Interval": 10,
          "Timeout": 5,
          "UnhealthyThreshold": 2,
          "HealthyThreshold": 2
        },
        "InstanceStates": [
          {
            "InstanceId": "i-fe2716e9",
            "State": "InService",
            "ReasonCode": "N/A",
            "Description": "N/A"
          },
          {
            "InstanceId": "i-ff2716e8",
            "State": "InService",
            "ReasonCode": "N/A",
            "Description": "N/A"
          }
        ],
        "Instances": [
          {
            "InstanceId": "i-fe2716e9"
          },
          {
            "InstanceId": "i-ff2716e8"
          }
        ],
        "Latest": true,
        "ListenerDescriptions": [
          {
            "Listener": {
              "Protocol": "HTTPS",
              "LoadBalancerPort": 443,
              "InstanceProtocol": "HTTPS",
              "InstancePort": 8084,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/snaplogic-io-cert-06052018"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-cdh-budgy-testfm-1508997213281"
            ]
          }
        ],
        "LoadBalancerName": "cdh-budgy-testfm",
        "Policies": {
          "AppCookieStickinessPolicies": [],
          "LBCookieStickinessPolicies": [],
          "OtherPolicies": [
            "AWSConsole-SSLNegotiationPolicy-cdh-budgy-testfm-1508997213281",
            "ELBSecurityPolicy-2016-08"
          ]
        },
        "Scheme": "internet-facing",
        "SecurityGroups": [],
        "SourceSecurityGroup": {
          "OwnerAlias": "amazon-elb",
          "GroupName": "amazon-elb-sg"
        },
        "Subnets": [],
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "7c7ddf31-d790-4b07-a8e6-72c89f666fe8"
          },
          "TagDescriptions": [
            {
              "LoadBalancerName": "cdh-budgy-testfm",
              "Tags": []
            }
          ]
        },
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "ClassicBalancers"
      },
      /* 12 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "stage-fmjcc-ha-492574737.us-east-1.elb.amazonaws.com",
        "AccessLog": {
          "Enabled": false
        },
        "AvailabilityZones": [
          "us-east-1a",
          "us-east-1b"
        ],
        "BackendServerDescriptions": [],
        "CanonicalHostedZoneName": "stage-fmjcc-ha-492574737.us-east-1.elb.amazonaws.com",
        "CanonicalHostedZoneNameID": "Z35SXDOTRQ7X7K",
        "DNSName": "stage-fmjcc-ha-492574737.us-east-1.elb.amazonaws.com",
        "HealthCheck": {
          "Target": "HTTP:8090/healthz",
          "Interval": 10,
          "Timeout": 5,
          "UnhealthyThreshold": 2,
          "HealthyThreshold": 2
        },
        "InstanceStates": [
          {
            "InstanceId": "i-010b3f0c455c1b5e8",
            "State": "OutOfService",
            "ReasonCode": "Instance",
            "Description": "Instance is in stopped state."
          },
          {
            "InstanceId": "i-028f4f8f6be4228a5",
            "State": "OutOfService",
            "ReasonCode": "Instance",
            "Description": "Instance is in stopped state."
          },
          {
            "InstanceId": "i-02a752d52cb4e7741",
            "State": "OutOfService",
            "ReasonCode": "Instance",
            "Description": "Instance is in stopped state."
          },
          {
            "InstanceId": "i-05909612e106ed00f",
            "State": "OutOfService",
            "ReasonCode": "Instance",
            "Description": "Instance is in stopped state."
          },
          {
            "InstanceId": "i-08319da9b64efaf21",
            "State": "OutOfService",
            "ReasonCode": "Instance",
            "Description": "Instance is in stopped state."
          },
          {
            "InstanceId": "i-0e9afeddf485d240e",
            "State": "OutOfService",
            "ReasonCode": "Instance",
            "Description": "Instance is in stopped state."
          }
        ],
        "Instances": [
          {
            "InstanceId": "i-010b3f0c455c1b5e8"
          },
          {
            "InstanceId": "i-028f4f8f6be4228a5"
          },
          {
            "InstanceId": "i-02a752d52cb4e7741"
          },
          {
            "InstanceId": "i-05909612e106ed00f"
          },
          {
            "InstanceId": "i-08319da9b64efaf21"
          },
          {
            "InstanceId": "i-0e9afeddf485d240e"
          }
        ],
        "Latest": true,
        "ListenerDescriptions": [
          {
            "Listener": {
              "Protocol": "HTTPS",
              "LoadBalancerPort": 8081,
              "InstanceProtocol": "HTTPS",
              "InstancePort": 8081,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/sl_snaplogic_io_cert_06062020"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-stage-fmjcc-ha-1538082982426"
            ]
          },
          {
            "Listener": {
              "Protocol": "HTTP",
              "LoadBalancerPort": 8090,
              "InstanceProtocol": "HTTP",
              "InstancePort": 8090
            },
            "PolicyNames": []
          },
          {
            "Listener": {
              "Protocol": "HTTPS",
              "LoadBalancerPort": 8084,
              "InstanceProtocol": "HTTPS",
              "InstancePort": 8084,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/sl_snaplogic_io_cert_06062020"
            },
            "PolicyNames": [
              "ELBSecurityPolicy-2016-08"
            ]
          }
        ],
        "LoadBalancerName": "stage-fmjcc-ha",
        "Policies": {
          "AppCookieStickinessPolicies": [],
          "LBCookieStickinessPolicies": [],
          "OtherPolicies": [
            "AWSConsole-SSLNegotiationPolicy-stage-fmjcc-ha-1538082982426",
            "ELBSecurityPolicy-2016-08"
          ]
        },
        "Scheme": "internet-facing",
        "SecurityGroups": [
          "sg-038472b94dac53dbb"
        ],
        "SourceSecurityGroup": {
          "OwnerAlias": "740934760981",
          "GroupName": "DEVQA_VPC_X110-FM-LB-secgrp01"
        },
        "Subnets": [
          "subnet-33678154",
          "subnet-64e1ee39"
        ],
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "06f26f13-8a60-42a5-ace7-d12dc537ab18"
          },
          "TagDescriptions": [
            {
              "LoadBalancerName": "stage-fmjcc-ha",
              "Tags": []
            }
          ]
        },
        "VPCId": "vpc-955f32ee",
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "ClassicBalancers"
      },
      /* 13 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "canary-kong-587186614.us-east-1.elb.amazonaws.com",
        "AccessLog": {
          "Enabled": false
        },
        "AvailabilityZones": [
          "us-east-1c",
          "us-east-1d"
        ],
        "BackendServerDescriptions": [],
        "CanonicalHostedZoneName": "canary-kong-587186614.us-east-1.elb.amazonaws.com",
        "CanonicalHostedZoneNameID": "Z35SXDOTRQ7X7K",
        "DNSName": "canary-kong-587186614.us-east-1.elb.amazonaws.com",
        "HealthCheck": {
          "Target": "HTTPS:8443/healthz",
          "Interval": 10,
          "Timeout": 5,
          "UnhealthyThreshold": 2,
          "HealthyThreshold": 2
        },
        "InstanceStates": [
          {
            "InstanceId": "i-60490eb0",
            "State": "OutOfService",
            "ReasonCode": "Instance",
            "Description": "Instance is in stopped state."
          },
          {
            "InstanceId": "i-ec996845",
            "State": "OutOfService",
            "ReasonCode": "Instance",
            "Description": "Instance is in stopped state."
          }
        ],
        "Instances": [
          {
            "InstanceId": "i-60490eb0"
          },
          {
            "InstanceId": "i-ec996845"
          }
        ],
        "Latest": true,
        "ListenerDescriptions": [
          {
            "Listener": {
              "Protocol": "HTTPS",
              "LoadBalancerPort": 8443,
              "InstanceProtocol": "HTTPS",
              "InstancePort": 8443,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/sl_snaplogic_io_cert_06062020"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-canary-kong-1538557326520"
            ]
          },
          {
            "Listener": {
              "Protocol": "HTTPS",
              "LoadBalancerPort": 8445,
              "InstanceProtocol": "HTTPS",
              "InstancePort": 8445,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/sl_snaplogic_io_cert_06062020"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-canary-kong-1538557326520"
            ]
          },
          {
            "Listener": {
              "Protocol": "HTTPS",
              "LoadBalancerPort": 8444,
              "InstanceProtocol": "HTTPS",
              "InstancePort": 8444,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/sl_snaplogic_io_cert_06062020"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-canary-kong-1538557326520"
            ]
          }
        ],
        "LoadBalancerName": "canary-kong",
        "Policies": {
          "AppCookieStickinessPolicies": [],
          "LBCookieStickinessPolicies": [],
          "OtherPolicies": [
            "AWSConsole-SSLNegotiationPolicy-canary-kong-1538557326520",
            "ELBSecurityPolicy-2016-08"
          ]
        },
        "Scheme": "internet-facing",
        "SecurityGroups": [],
        "SourceSecurityGroup": {
          "OwnerAlias": "amazon-elb",
          "GroupName": "amazon-elb-sg"
        },
        "Subnets": [],
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "801afee9-f341-4493-8edb-142f31fb66f8"
          },
          "TagDescriptions": [
            {
              "LoadBalancerName": "canary-kong",
              "Tags": [
                {
                  "Key": "Name",
                  "Value": "canary kong api"
                }
              ]
            }
          ]
        },
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "ClassicBalancers"
      },
      /* 14 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "prod-datalakecdh-fm-1387707959.us-east-1.elb.amazonaws.com",
        "AccessLog": {
          "Enabled": false
        },
        "AvailabilityZones": [
          "us-east-1a"
        ],
        "BackendServerDescriptions": [],
        "CanonicalHostedZoneName": "prod-datalakecdh-fm-1387707959.us-east-1.elb.amazonaws.com",
        "CanonicalHostedZoneNameID": "Z35SXDOTRQ7X7K",
        "DNSName": "prod-datalakecdh-fm-1387707959.us-east-1.elb.amazonaws.com",
        "HealthCheck": {
          "Target": "HTTPS:8084/healthz",
          "Interval": 10,
          "Timeout": 5,
          "UnhealthyThreshold": 2,
          "HealthyThreshold": 2
        },
        "InstanceStates": [
          {
            "InstanceId": "i-5e93d548",
            "State": "InService",
            "ReasonCode": "N/A",
            "Description": "N/A"
          },
          {
            "InstanceId": "i-5f93d549",
            "State": "InService",
            "ReasonCode": "N/A",
            "Description": "N/A"
          }
        ],
        "Instances": [
          {
            "InstanceId": "i-5e93d548"
          },
          {
            "InstanceId": "i-5f93d549"
          }
        ],
        "Latest": true,
        "ListenerDescriptions": [
          {
            "Listener": {
              "Protocol": "HTTPS",
              "LoadBalancerPort": 443,
              "InstanceProtocol": "HTTPS",
              "InstancePort": 8084,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/sl_snaplogic_io_cert_06062020"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-prod-datalakecdh-fm-1540371540714"
            ]
          }
        ],
        "LoadBalancerName": "prod-datalakecdh-fm",
        "Policies": {
          "AppCookieStickinessPolicies": [],
          "LBCookieStickinessPolicies": [],
          "OtherPolicies": [
            "ELBSecurityPolicy-2016-08",
            "AWSConsole-SSLNegotiationPolicy-prod-datalakecdh-fm-1540371540714"
          ]
        },
        "Scheme": "internet-facing",
        "SecurityGroups": [],
        "SourceSecurityGroup": {
          "OwnerAlias": "amazon-elb",
          "GroupName": "amazon-elb-sg"
        },
        "Subnets": [],
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "f77d9f94-b68d-45ae-bde5-1ce116db6f73"
          },
          "TagDescriptions": [
            {
              "LoadBalancerName": "prod-datalakecdh-fm",
              "Tags": [
                {
                  "Key": "Name",
                  "Value": "datalakecdh"
                }
              ]
            }
          ]
        },
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "ClassicBalancers"
      },
      /* 15 */
      {
        "AccountId": 740934760981.0,
        "Region": "us-east-1",
        "ResourceID": "cidevxl-1815997105.us-east-1.elb.amazonaws.com",
        "AccessLog": {
          "Enabled": false
        },
        "AvailabilityZones": [
          "us-east-1c"
        ],
        "BackendServerDescriptions": [],
        "CanonicalHostedZoneName": "cidevxl-1815997105.us-east-1.elb.amazonaws.com",
        "CanonicalHostedZoneNameID": "Z35SXDOTRQ7X7K",
        "DNSName": "cidevxl-1815997105.us-east-1.elb.amazonaws.com",
        "HealthCheck": {
          "Target": "HTTPS:443/healthz",
          "Interval": 10,
          "Timeout": 5,
          "UnhealthyThreshold": 4,
          "HealthyThreshold": 2
        },
        "InstanceStates": [
          {
            "InstanceId": "i-2c3677b2",
            "State": "InService",
            "ReasonCode": "N/A",
            "Description": "N/A"
          }
        ],
        "Instances": [
          {
            "InstanceId": "i-2c3677b2"
          }
        ],
        "Latest": true,
        "ListenerDescriptions": [
          {
            "Listener": {
              "Protocol": "HTTPS",
              "LoadBalancerPort": 443,
              "InstanceProtocol": "HTTPS",
              "InstancePort": 443,
              "SSLCertificateId": "arn:aws:iam::740934760981:server-certificate/clouddev.snaplogic.com-20201105"
            },
            "PolicyNames": [
              "AWSConsole-SSLNegotiationPolicy-cidevxl-1543513783786"
            ]
          }
        ],
        "LoadBalancerName": "cidevxl",
        "Policies": {
          "AppCookieStickinessPolicies": [],
          "LBCookieStickinessPolicies": [],
          "OtherPolicies": [
            "ELBSecurityPolicy-2016-08",
            "AWSConsole-SSLNegotiationPolicy-cidevxl-1543513783786"
          ]
        },
        "Scheme": "internet-facing",
        "SecurityGroups": [],
        "SourceSecurityGroup": {
          "OwnerAlias": "amazon-elb",
          "GroupName": "amazon-elb-sg"
        },
        "Subnets": [],
        "Tags": {
          "ResponseMetadata": {
            "RequestId": "011dac0b-8885-4420-a785-a42299689393"
          },
          "TagDescriptions": [
            {
              "LoadBalancerName": "cidevxl",
              "Tags": [
                {
                  "Key": "pod",
                  "Value": "cidevxl"
                }
              ]
            }
          ]
        },
        "metrics": [
          {
            "MetricName": "Requests",
            "Datapoints": []
          }
        ],
        "type": "ClassicBalancers"
      }
    ]
  }