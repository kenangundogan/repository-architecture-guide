// src/app/api/groups/route.js
export async function GET() {
    const groups = [
        {
            id: 100001,
            name: "Habertürk",
            description: "Habertürk grubu web projeleri",
            role: "Developer",
            color: "red",
            groups: [
                {
                    id: 101,
                    name: "API",
                    description: "API Servisleri",
                    role: "Backend",
                    color: "blue",
                    groups: [],
                    projects: [
                        { id: 1001, name: "Habertürk API v1", description: "İlk nesil API servisi", status: "deprecated" },
                        { id: 1003, name: "Habertürk API", description: "Güncel API servisi", status: "active" },
                    ]
                },
                {
                    id: 102,
                    name: "CMS",
                    description: "CMS ve Yönetim Paneli",
                    role: "Frontend",
                    color: "green",
                    groups: [],
                    projects: [
                        { id: 2001, name: "Habertürk CMS v1", description: "İlk nesil içerik yönetim sistemi", status: "deprecated" },
                        { id: 2003, name: "Habertürk CMS", description: "Güncel içerik yönetim sistemi", status: "active" }
                    ]
                },
                {
                    id: 103,
                    name: "Web",
                    description: "Habertürk Web Siteleri",
                    role: "Frontend",
                    color: "yellow",
                    groups: [],
                    projects: [
                        { id: 3001, name: "Habertürk Web v1", description: "İlk nesil web sitesi", status: "deprecated" },
                        { id: 3002, name: "Habertürk Web v2", description: "İkinci nesil web sitesi", status: "deprecated" },
                        { id: 3003, name: "Habertürk Web", description: "Güncel web sitesi", status: "active" }
                    ]
                },
                {
                    id: 104,
                    name: "Mobile",
                    description: "Mobil Uygulamalar",
                    role: "Mobile Dev",
                    color: "purple",
                    groups: [],
                    projects: [
                        { id: 4001, name: "Habertürk Mobile iOS v1", description: "İlk nesil iOS uygulaması", status: "deprecated" },
                        { id: 4002, name: "Habertürk Mobile Android v1", description: "İlk nesil Android uygulaması", status: "deprecated" },
                        { id: 4003, name: "Habertürk Mobile iOS", description: "Güncel iOS uygulaması", status: "active" },
                        { id: 4004, name: "Habertürk Mobile Android", description: "Güncel Android uygulaması", status: "active" }
                    ]
                },
                {
                    id: 105,
                    name: "Assets",
                    description: "Varlık Yönetimi",
                    role: "Designer",
                    color: "pink",
                    groups: [],
                    projects: [
                        { id: 4003, name: "Habertürk Assets", description: "Güncel varlık yönetimi", status: "active" }
                    ]
                },
                {
                    id: 106,
                    name: "DevOps",
                    description: "Altyapı ve CI/CD Yönetimi",
                    role: "DevOps Engineer",
                    color: "gray",
                    groups: [],
                    projects: [
                        { id: 5002, name: "Habertürk CI/CD", description: "DevOps süreçleri ve entegrasyon", status: "active" },
                        { id: 5003, name: "Habertürk Monitoring", description: "Sunucu izleme ve log yönetimi", status: "active" }
                    ]
                }
            ],
            projects: []
        },
        {
            id: 10011,
            name: "Habertürk TV",
            description: "Habertürk TV grubu web projeleri",
            role: "Developer",
            color: "red",
            groups: [
                {
                    id: 101,
                    name: "API",
                    description: "API Servisleri",
                    role: "Backend",
                    color: "blue",
                    groups: [],
                    projects: [
                        { id: 1003, name: "Habertürk TV API", description: "Güncel API servisi", status: "active" },
                    ]
                },
                {
                    id: 103,
                    name: "Web",
                    description: "Habertürk TV Web Siteleri",
                    role: "Frontend",
                    color: "yellow",
                    groups: [],
                    projects: [
                        { id: 3001, name: "Habertürk TV Web v1", description: "İlk nesil web sitesi", status: "deprecated" },
                        { id: 3003, name: "Habertürk TV Web", description: "Güncel web sitesi", status: "active" }
                    ]
                },
                {
                    id: 104,
                    name: "Mobile",
                    description: "Mobil Uygulamalar",
                    role: "Mobile Dev",
                    color: "purple",
                    groups: [],
                    projects: [
                        { id: 4001, name: "Habertürk TV Mobile iOS v1", description: "İlk nesil iOS uygulaması", status: "deprecated" },
                        { id: 4002, name: "Habertürk TV Mobile Android v1", description: "İlk nesil Android uygulaması", status: "deprecated" },
                        { id: 4003, name: "Habertürk TV Mobile iOS", description: "Güncel iOS uygulaması", status: "active" },
                        { id: 4004, name: "Habertürk TV Mobile Android", description: "Güncel Android uygulaması", status: "active" }
                    ]
                },
                {
                    id: 105,
                    name: "OTT",
                    description: "OTT Uygulamalar",
                    role: "Mobile Dev",
                    color: "green",
                    groups: [],
                    projects: [
                        { id: 4001, name: "Habertürk TV Apple TV V1", description: "İlk nesil Apple TV uygulaması", status: "deprecated" },
                        { id: 4002, name: "Habertürk TV Apple TV", description: "İlk nesil Apple TV uygulaması", status: "active" },
                        { id: 4003, name: "Habertürk TV Android TV", description: "İlk nesil Android TV uygulaması", status: "active" },
                        { id: 4004, name: "Habertürk TV Tizen TV", description: "Güncel Tizen TV uygulaması", status: "active" },
                        { id: 4005, name: "Habertürk TV Smart TV", description: "Güncel Smart TV uygulaması", status: "active" }
                    ]
                }
            ],
            projects: []
        },
        {
            id: 300001,
            name: "HT Kulup",
            description: "HT Kulup grubu web projeleri",
            role: "Developer",
            color: "red",
            groups: [
                {
                    id: 101,
                    name: "API",
                    description: "API Servisleri",
                    role: "Backend",
                    color: "blue",
                    groups: [],
                    projects: [
                        { id: 1003, name: "HT Kulup API", description: "Güncel API servisi", status: "active" }
                    ]
                },
                {
                    id: 102,
                    name: "CMS",
                    description: "CMS ve Yönetim Paneli",
                    role: "Frontend",
                    color: "green",
                    groups: [],
                    projects: [
                        { id: 2003, name: "HT Kulup CMS", description: "Güncel içerik yönetim sistemi", status: "active" }
                    ]
                },
                {
                    id: 103,
                    name: "Web",
                    description: "HT Kulup Web Siteleri",
                    role: "Frontend",
                    color: "yellow",
                    groups: [],
                    projects: [
                        { id: 3003, name: "HT Kulup Web", description: "Güncel web sitesi", status: "active" }
                    ]
                }
            ],
            projects: []
        },
        {
            id: 400001,
            name: "HT Hayat",
            description: "HT Hayat grubu web projeleri",
            role: "Developer",
            color: "red",
            groups: [
                {
                    id: 101,
                    name: "API",
                    description: "API Servisleri",
                    role: "Backend",
                    color: "blue",
                    groups: [],
                    projects: [
                        { id: 1003, name: "HT Hayat API", description: "Güncel API servisi", status: "active" }
                    ]
                },
                {
                    id: 102,
                    name: "CMS",
                    description: "CMS ve Yönetim Paneli",
                    role: "Frontend",
                    color: "green",
                    groups: [],
                    projects: [
                        { id: 2003, name: "HT Hayat CMS", description: "Güncel içerik yönetim sistemi", status: "active" }
                    ]
                },
                {
                    id: 103,
                    name: "Web",
                    description: "HT Hayat Web Siteleri",
                    role: "Frontend",
                    color: "yellow",
                    groups: [],
                    projects: [
                        { id: 3003, name: "HT Hayat Web", description: "Güncel web sitesi", status: "active" }
                    ]
                }
            ],
            projects: []
        },
        {
            id: 500001,
            name: "HT Spor",
            description: "HT Spor grubu web projeleri",
            role: "Developer",
            color: "red",
            groups: [
                {
                    id: 101,
                    name: "API",
                    description: "API Servisleri",
                    role: "Backend",
                    color: "blue",
                    groups: [],
                    projects: [
                        { id: 1003, name: "HT Spor API", description: "Güncel API servisi", status: "active" }
                    ]
                },
                {
                    id: 102,
                    name: "CMS",
                    description: "CMS ve Yönetim Paneli",
                    role: "Frontend",
                    color: "green",
                    groups: [],
                    projects: [
                        { id: 2003, name: "HT Spor CMS", description: "Güncel içerik yönetim sistemi", status: "active" }
                    ]
                },
                {
                    id: 103,
                    name: "Web",
                    description: "HT Spor Web Siteleri",
                    role: "Frontend",
                    color: "yellow",
                    groups: [],
                    projects: [
                        { id: 3003, name: "HT Spor Web", description: "Güncel web sitesi", status: "active" }
                    ]
                }
            ],
            projects: []
        },
        {
            id: 110001,
            name: "BloombergHT",
            description: "BloombergHT grubu web projeleri",
            role: "Developer",
            color: "indigo",
            groups: [
                {
                    id: 101,
                    name: "API",
                    description: "API Servisleri",
                    role: "Backend",
                    color: "blue",
                    groups: [],
                    projects: [
                        { id: 1003, name: "BloombergHT API", description: "Güncel API servisi", status: "active" }
                    ]
                },
                {
                    id: 102,
                    name: "CMS",
                    description: "CMS ve Yönetim Paneli",
                    role: "Frontend",
                    color: "green",
                    groups: [],
                    projects: [
                        { id: 2001, name: "BloombergHT CMS v1", description: "İlk nesil içerik yönetim sistemi", status: "deprecated" },
                        { id: 2003, name: "BloombergHT CMS", description: "Güncel içerik yönetim sistemi", status: "active" }
                    ]
                },
                {
                    id: 103,
                    name: "Web",
                    description: "BloombergHT Web Siteleri",
                    role: "Frontend",
                    color: "yellow",
                    groups: [],
                    projects: [
                        { id: 3001, name: "BloombergHT Web v1", description: "İlk nesil web sitesi", status: "deprecated" },
                        { id: 3003, name: "BloombergHT Web", description: "Güncel web sitesi", status: "active" }
                    ]
                },
                {
                    id: 104,
                    name: "Mobile",
                    description: "Mobil Uygulamalar",
                    role: "Mobile Dev",
                    color: "purple",
                    groups: [],
                    projects: [
                        { id: 4001, name: "BloombergHT Mobile iOS v1", description: "İlk nesil iOS uygulaması", status: "deprecated" },
                        { id: 4002, name: "BloombergHT Mobile Android v1", description: "İlk nesil Android uygulaması", status: "deprecated" },
                        { id: 4003, name: "BloombergHT Mobile iOS", description: "Güncel iOS uygulaması", status: "active" },
                        { id: 4004, name: "BloombergHT Mobile Android", description: "Güncel Android uygulaması", status: "active" }
                    ]
                },
                {
                    id: 105,
                    name: "Assets",
                    description: "Varlık Yönetimi",
                    role: "Designer",
                    color: "pink",
                    groups: [],
                    projects: [
                        { id: 4003, name: "BloombergHT Assets", description: "Güncel varlık yönetimi", status: "active" }
                    ]
                }
            ],
            projects: []
        },
        {
            id: 123001,
            name: "BusinessHT",
            description: "BusinessHT grubu web projeleri",
            role: "Developer",
            color: "blue",
            groups: [
                {
                    id: 102,
                    name: "CMS",
                    description: "CMS ve Yönetim Paneli",
                    role: "Frontend",
                    color: "green",
                    groups: [],
                    projects: [
                        { id: 2003, name: "BusinessHT CMS", description: "Güncel içerik yönetim sistemi", status: "active" }
                    ]
                },
                {
                    id: 103,
                    name: "Web",
                    description: "BusinessHT Web Siteleri",
                    role: "Frontend",
                    color: "yellow",
                    groups: [],
                    projects: [
                        { id: 3003, name: "BusinessHT Web", description: "Güncel web sitesi", status: "active" }
                    ]
                }
            ],
            projects: []
        },
        {
            id: 123401,
            name: "Businessweek",
            description: "Businessweek grubu web projeleri",
            role: "Developer",
            color: "violet",
            groups: [
                {
                    id: 102,
                    name: "CMS, WEB",
                    description: "CMS ve Yönetim Paneli",
                    role: "Frontend",
                    color: "green",
                    groups: [],
                    projects: [
                        { id: 2003, name: "Businessweek CMS, WEB", description: "Güncel web ve içerik yönetim sistemi", status: "active" }
                    ]
                }
            ],
            projects: []
        },
        {
            id: 200001,
            name: "Show TV",
            description: "Show TV grubu web projeleri",
            role: "Developer",
            color: "orange",
            groups: [
                {
                    id: 101,
                    name: "API",
                    description: "API Servisleri",
                    role: "Backend",
                    color: "blue",
                    groups: [],
                    projects: [
                        { id: 1001, name: "Show TV API v1", description: "İlk nesil API servisi", status: "deprecated" },
                        { id: 1002, name: "Show TV API v2", description: "İkinci nesil API servisi", status: "deprecated" },
                        { id: 1003, name: "Show TV API", description: "Güncel API servisi", status: "active" }
                    ]
                },
                {
                    id: 102,
                    name: "CMS",
                    description: "CMS ve Yönetim Paneli",
                    role: "Frontend",
                    color: "green",
                    groups: [],
                    projects: [
                        { id: 2001, name: "Show TV CMS v1", description: "İlk nesil içerik yönetim sistemi", status: "deprecated" },
                        { id: 2003, name: "Show TV CMS", description: "Güncel içerik yönetim sistemi", status: "active" }
                    ]
                },
                {
                    id: 103,
                    name: "Web",
                    description: "Show TV Web Siteleri",
                    role: "Frontend",
                    color: "yellow",
                    groups: [],
                    projects: [
                        { id: 3001, name: "Show TV Web v1", description: "İlk nesil web sitesi", status: "deprecated" },
                        { id: 3002, name: "Show TV Web v2", description: "İkinci nesil web sitesi", status: "deprecated" },
                        { id: 3003, name: "Show TV Web", description: "Güncel web sitesi", status: "active" }
                    ]
                },
                {
                    id: 104,
                    name: "Mobile",
                    description: "Mobil Uygulamalar",
                    role: "Mobile Dev",
                    color: "purple",
                    groups: [],
                    projects: [
                        { id: 4001, name: "Show TV Mobile iOS v1", description: "İlk nesil iOS uygulaması", status: "deprecated" },
                        { id: 4002, name: "Show TV Mobile Android v1", description: "İlk nesil Android uygulaması", status: "deprecated" },
                        { id: 4003, name: "Show TV Mobile iOS", description: "Güncel iOS uygulaması", status: "active" },
                        { id: 4004, name: "Show TV Mobile Android", description: "Güncel Android uygulaması", status: "active" }
                    ]
                },
                {
                    id: 105,
                    name: "DevOps",
                    description: "Altyapı ve CI/CD Yönetimi",
                    role: "DevOps Engineer",
                    color: "gray",
                    groups: [],
                    projects: [
                        { id: 5001, name: "Show TV Infra", description: "Sunucu altyapısı ve otomasyon", status: "active" },
                        { id: 5002, name: "Show TV CI/CD", description: "DevOps süreçleri ve entegrasyon", status: "active" },
                        { id: 5003, name: "Show TV Monitoring", description: "Sunucu izleme ve log yönetimi", status: "active" }
                    ]
                }
            ],
            projects: []
        },
        {
            id: 543001,
            name: "Show Max",
            description: "Show Max grubu web projeleri",
            role: "Developer",
            color: "amber",
            groups: [
                {
                    id: 102,
                    name: "CMS, WEB",
                    description: "CMS ve Yönetim Paneli",
                    role: "Frontend",
                    color: "green",
                    groups: [],
                    projects: [
                        { id: 2003, name: "Show Max CMS, WEB", description: "Günvel web ve içerik yönetim sistemi", status: "active" }
                    ]
                }
            ],
            projects: []
        },
        {
            id: 542001,
            name: "Show Turk",
            description: "Show Turk grubu web projeleri",
            role: "Developer",
            color: "yellow",
            groups: [
                {
                    id: 102,
                    name: "CMS, WEB",
                    description: "CMS ve Yönetim Paneli",
                    role: "Frontend",
                    color: "green",
                    groups: [],
                    projects: [
                        { id: 2003, name: "Show Turk CMS, WEB", description: "Günvel web ve içerik yönetim sistemi", status: "active" }
                    ]
                }
            ],
            projects: []
        },
        {
            id: 540001,
            name: "Hukuk",
            description: "Hukuk grubu web projeleri",
            role: "Developer",
            color: "orange",
            groups: [
                {
                    id: 102,
                    name: "CMS, WEB",
                    description: "CMS ve Yönetim Paneli",
                    role: "Frontend",
                    color: "green",
                    groups: [],
                    projects: [
                        { id: 2003, name: "Hukuk CMS, WEB", description: "Günvel web ve içerik yönetim sistemi", status: "active" }
                    ]
                }
            ],
            projects: []
        },
        {
            id: 600001,
            name: "Common",
            description: "Common projects",
            role: "Maintainer",
            color: "rose",
            groups: [
                {
                    id: 101,
                    name: "Transcoder",
                    description: "Güncel içerik yönetim sistemi",
                    role: "Developer",
                    color: "purple",
                    groups: [
                        {
                            id: 101,
                            name: "API",
                            description: "API Servisleri",
                            role: "Backend",
                            color: "blue",
                            groups: [],
                            projects: [
                                { id: 1003, name: "Transcoder API", description: "Güncel API servisi", status: "active" }
                            ]
                        },
                        {
                            id: 102,
                            name: "CMS",
                            description: "CMS ve Yönetim Paneli",
                            role: "Frontend",
                            color: "green",
                            groups: [],
                            projects: [
                                { id: 1003, name: "Transcoder Cms", description: "Transcoding service for CMS", status: "active" }
                            ]
                        }
                    ],
                    projects: []
                }
            ],
            projects: []
        }
    ];

    return Response.json(groups);
}
