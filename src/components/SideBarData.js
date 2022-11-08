import React from 'react'
import * as FaIcons from 'react-icons-fa'
import * as AiIcons from 'react-icons-gi'
import * as GiIcons from 'react-icons-ai'
import * as IoIcons from 'react-icons-io'
import * as MdIcons from 'react-icons-md'
import * as RiIcons from 'react-icons-ri'
import * as BiIcons from 'react-icons-bi'
import SideTag from './SideTag'


export const SideBarData = [{
title : 'Category',
path :'/category' , icon: <MdIcons.MdOutlineCategory/>,
iconsClosed:<RiIcons.RiarrowDownSFill/>,
iconsOpen:<RiIcons.RiarrowUpSFill/>,
subNav:[
    {
        title : 'Photo',
        path: '/category/photo'
    },{
        title : 'Vector',
        path: '/category/Vector'
    },{
        title : 'PSD',
        path: '/category/PSD'
    }
    ,{
        title : 'Icons',
        path: '/category/Icons'
    }
]
},
{
    title : 'License',
    path :'/License' , icon: <BiIcons.BiCrown/>,
    iconsClosed:<RiIcons.RiarrowDownSFill/>,
    iconsOpen:<RiIcons.RiarrowUpSFill/>,
    subNav:[
        {
            title : 'Free',
            path: '/license/free'
        },{
            title : 'Premium',
            path: '/license/premium'
        }
    ]
    },
    {
        title : 'Color',
        path :'/Color' , icon: <BiIcons.BiCrown/>,
        iconsClosed:<RiIcons.RiarrowDownSFill/>,
        iconsOpen:<RiIcons.RiarrowUpSFill/>,
        subNav:[
            {
                title : 'Free',
                path: '/license/free'
            },{
                title : 'Premium',
                path: '/license/premium'
            }
        ]
        },
        {
            title : 'File Type',
            path :'/filetype' , icon: <AiIcons.AiOutlineFile/>,
            iconsClosed:<RiIcons.RiarrowDownSFill/>,
            iconsOpen:<RiIcons.RiarrowUpSFill/>,
            subNav:[
                {
                    title : 'JPG',
                    path: '/filetype/JPG'
                },{
                    title : 'Al',
                    path: '/filytype/Ai'
                },{
                    title : 'EPS',
                    path: '/filytype/EPS'
                }
            ]
            }
]
