// **********************************************************************
//
// Copyright (c) 2003-2018 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************

declare module "ice"
{
    namespace Ice
    {
        class Address
        {
            constructor(host:string, port:number);

            host:string;
            port:number;
        }
    }
}
