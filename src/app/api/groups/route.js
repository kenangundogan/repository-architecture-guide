export async function GET() {
    const groups = [
        {
            id: 1,
            name: "Habertürk",
            description: "Habertürk grubu web projeleri",
            role: "Developer",
            iconColor: "bg-red-500",
            groups: [
                {
                    id: 101,
                    name: "API",
                    description: "API Servisleri",
                    role: "Backend",
                    iconColor: "bg-blue-500",
                    groups: [],
                    projects: [
                        { id: 1001, name: "Habertürk API v1 (Legacy)", description: "İlk nesil API servisi (Legacy)", status: "legacy", repositories: 4 },
                        { id: 1002, name: "Habertürk API v2 (Legacy)", description: "İkinci nesil API servisi (Legacy)", status: "legacy", repositories: 6 },
                        { id: 1003, name: "Habertürk API", description: "Güncel API servisi", status: "active", repositories: 8 },
                        { id: 1004, name: "Habertürk Auth", description: "Kimlik doğrulama servisi", status: "active", repositories: 3 }
                    ]
                },
                {
                    id: 102,
                    name: "CMS",
                    description: "CMS ve Yönetim Paneli",
                    role: "Frontend",
                    iconColor: "bg-green-500",
                    groups: [],
                    projects: [
                        { id: 2001, name: "Habertürk CMS v1 (Legacy)", description: "İlk nesil içerik yönetim sistemi", status: "legacy", repositories: 3 },
                        { id: 2002, name: "Habertürk CMS v2 (Legacy)", description: "İkinci nesil içerik yönetim sistemi", status: "legacy", repositories: 5 },
                        { id: 2003, name: "Habertürk CMS", description: "Güncel içerik yönetim sistemi", status: "active", repositories: 7 },
                        { id: 2004, name: "Habertürk Admin Panel", description: "Yönetim paneli", status: "active", repositories: 2 }
                    ]
                },
                {
                    id: 103,
                    name: "Web",
                    description: "Habertürk Web Siteleri",
                    role: "Frontend",
                    iconColor: "bg-yellow-500",
                    groups: [],
                    projects: [
                        { id: 3001, name: "Habertürk Web v1 (Legacy)", description: "İlk nesil web sitesi", status: "legacy", repositories: 4 },
                        { id: 3002, name: "Habertürk Web v2 (Legacy)", description: "İkinci nesil web sitesi", status: "legacy", repositories: 5 },
                        { id: 3003, name: "Habertürk Web", description: "Güncel web sitesi", status: "active", repositories: 6 },
                        { id: 3004, name: "Habertürk Landing", description: "Landing sayfası", status: "active", repositories: 3 }
                    ]
                },
                {
                    id: 104,
                    name: "Mobile",
                    description: "Mobil Uygulamalar",
                    role: "Mobile Dev",
                    iconColor: "bg-purple-500",
                    groups: [],
                    projects: [
                        { id: 4001, name: "Habertürk Mobile iOS v1 (Legacy)", description: "İlk nesil iOS uygulaması", status: "legacy", repositories: 2 },
                        { id: 4002, name: "Habertürk Mobile Android v1 (Legacy)", description: "İlk nesil Android uygulaması", status: "legacy", repositories: 3 },
                        { id: 4003, name: "Habertürk Mobile iOS", description: "Güncel iOS uygulaması", status: "active", repositories: 4 },
                        { id: 4004, name: "Habertürk Mobile Android", description: "Güncel Android uygulaması", status: "active", repositories: 5 }
                    ]
                },
                {
                    id: 105,
                    name: "DevOps",
                    description: "Altyapı ve CI/CD Yönetimi",
                    role: "DevOps Engineer",
                    iconColor: "bg-gray-500",
                    groups: [],
                    projects: [
                        { id: 5001, name: "Habertürk Infra", description: "Sunucu altyapısı ve otomasyon", status: "active", repositories: 3 },
                        { id: 5002, name: "Habertürk CI/CD", description: "DevOps süreçleri ve entegrasyon", status: "active", repositories: 4 },
                        { id: 5003, name: "Habertürk Monitoring", description: "Sunucu izleme ve log yönetimi", status: "active", repositories: 2 }
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
            iconColor: "bg-yellow-500",
            groups: [],
            projects: [
                { id: 2002, name: "Laravel Core", description: "Laravel çekirdek bileşenleri", status: "active", repositories: 10 },
                { id: 2003, name: "Laravel CMS", description: "Laravel tabanlı CMS", status: "legacy", repositories: 4 }
            ]
        },
        {
            id: 3,
            name: "H2",
            description: "H2 Proje Grubu",
            role: "Private",
            iconColor: "bg-purple-500",
            groups: [],
            projects: []
        }
    ];

    return Response.json(groups);
}
