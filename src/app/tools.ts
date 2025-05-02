import { Tool } from "@aws-sdk/client-bedrock-runtime";

export const toolsSchema: Tool[] = [
    {
        toolSpec:{
            name:"findShops",
            inputSchema: {
                json:{
                   type: "object",
                   properties: {
                    ingredientName: { 
                        type: "string",
                        description: "ingredient name"
                    }
                   },
                   required: ["ingredient"],
                },
            },
        },
    }   
]