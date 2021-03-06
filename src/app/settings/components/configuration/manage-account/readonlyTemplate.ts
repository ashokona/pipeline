export const readonlyTemplate = {
    "AWSTemplateFormatVersion":"2010-09-09",
    "Description":"This template create.",
    "Outputs":{
       "RoleARN":{
          "Description":"The ARN of the role that can be assumed by the COpS account.",
          "Value":{
             "Fn::GetAtt":[
                "CopsRole",
                "Arn"
             ]
          }
       }
    },
    "Parameters":{
       "ExternalID":{
          "Description":"The External ID that will be required to assume the role.",
          "MinLength":"1",
          "Type":"String",
          "Default":"JbcakoyrE9ja"
       }
    },
    "Resources":{
       "CopsRole":{
          "Properties":{
             "RoleName":"CopsIntegrationRole",
             "ManagedPolicyArns":[
                "arn:aws:iam::aws:policy/ReadOnlyAccess"
             ],
             "AssumeRolePolicyDocument":{
                "Statement":[
                   {
                      "Action":"sts:AssumeRole",
                      "Condition":{
                         "StringEquals":{
                            "sts:ExternalId":{
                               "Ref":"ExternalID"
                            }
                         }
                      },
                      "Effect":"Allow",
                      "Principal":{
                         "AWS":{
                            "Fn::Join":[
                               "",
                               [
                                  "arn:aws:iam::",
                                  "854293248838",
                                  ":root"
                               ]
                            ]
                         }
                      }
                   }
                ],
                "Version":"2012-10-17"
             },
             "Path":"/"
          },
          "Type":"AWS::IAM::Role"
       }
    }
 }