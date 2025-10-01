# -*- coding: utf-8 -*-
{
    'name': "Dashboard Extended",
    'description': """
        Dashboard for show all values of sale module.
    """,
    'author': "Gianmarco Contreras",
    'website': "https://github.com/CodigoByte2020",
    'category': 'Learnings/Learning',
    'version': '0.1',
    'license': 'AGPL-3',
    'depends': ['base', 'web', 'sale'],
    'data': [
        'views/sales_dashboard.xml'
    ],
    'installable': True,
    'application': True,
    'assets': {
        'web.assets_backend': [
            'dashboard_extended/static/src/components/**/*.js',
            'dashboard_extended/static/src/components/**/*.xml',
        ]
    }
}
