export async function GET() {
    const groups = [
        {
            id: 1,
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
                        { id: 1002, name: "Habertürk API v2", description: "İkinci nesil API servisi", status: "deprecated" },
                        { id: 1003, name: "Habertürk API", description: "Güncel API servisi", status: "active" },
                        { id: 1004, name: "Habertürk Auth", description: "Kimlik doğrulama servisi", status: "active" }
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
                        { id: 2002, name: "Habertürk CMS v2", description: "İkinci nesil içerik yönetim sistemi", status: "deprecated" },
                        { id: 2003, name: "Habertürk CMS", description: "Güncel içerik yönetim sistemi", status: "active" },
                        { id: 2004, name: "Habertürk Admin Panel", description: "Yönetim paneli", status: "active" }
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
                        { id: 3003, name: "Habertürk Web", description: "Güncel web sitesi", status: "active" },
                        { id: 3004, name: "Habertürk Landing", description: "Landing sayfası", status: "active" }
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
                    name: "DevOps",
                    description: "Altyapı ve CI/CD Yönetimi",
                    role: "DevOps Engineer",
                    color: "gray",
                    groups: [],
                    projects: [
                        { id: 5001, name: "Habertürk Infra", description: "Sunucu altyapısı ve otomasyon", status: "active" },
                        { id: 5002, name: "Habertürk CI/CD", description: "DevOps süreçleri ve entegrasyon", status: "active" },
                        { id: 5003, name: "Habertürk Monitoring", description: "Sunucu izleme ve log yönetimi", status: "active" }
                    ]
                }
            ],
            projects: []
        },
        {
            id: 2,
            name: "Laravel",
            description: "Laravel projeleri",
            role: "Maintainer",
            color: "yellow",
            groups: [],
            projects: [
                { id: 2002, name: "Laravel Core", description: "Laravel çekirdek bileşenleri", status: "active" },
                { id: 2003, name: "Laravel CMS", description: "Laravel tabanlı CMS", status: "deprecated" }
            ]
        },
        {
            id: 3,
            name: "H2",
            description: "H2 Proje Grubu",
            role: "Private",
            color: "purple",
            groups: [],
            projects: []
        }
    ];

    return Response.json(groups);
}
