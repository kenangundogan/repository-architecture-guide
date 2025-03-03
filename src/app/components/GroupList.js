"use client";
import { useEffect, useState } from "react";

export default function GroupList() {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        fetch("/api/groups")
            .then((res) => res.json())
            .then((data) => setGroups(data));
    }, []);

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Repository Architecture Guide (RAG)</h1>
            <div className="overflow-hidden grid gap-2">
                {groups.map((group) => (
                    <GroupItem key={group.id} group={group} />
                ))}
            </div>
        </div>
    );
}

function GroupItem({ group }) {
    const [isOpen, setIsOpen] = useState(false); // Grup açık/kapalı kontrolü

    return (
        <div>
            {/* Grup Başlığı */}
            <div className="bg-white p-6 flex items-center justify-between rounded-xs cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 flex flex-none items-center justify-center text-lg font-bold text-white rounded-xs ${group.iconColor}`}>
                        {group.name.charAt(0)}
                    </div>
                    <div>
                        <h2 className="text-md font-semibold">{group.name}</h2>
                        <p className="text-xs text-gray-500">{group.description}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="px-2 py-1 text-xs bg-gray-200 rounded-sm">{group.role}</span>
                    <button className="text-gray-500 hover:text-gray-700">
                        {isOpen ? "▼" : "▶"}
                    </button>
                </div>
            </div>

            {/* İçerik - Alt Gruplar ve Projeler */}
            {isOpen && (
                <div className="ml-4 mt-3 border-l-2 border-white pl-4">
                    {/* Alt Gruplar */}
                    {group.groups.length > 0 && (
                        <div className="grid gap-2">
                            {group.groups.map((subgroup) => (
                                <GroupItem key={subgroup.id} group={subgroup} />
                            ))}
                        </div>
                    )}

                    {/* Projeler */}
                    {group.projects.length > 0 && (
                        <div className="mt-3">
                            <ul className="grid gap-1">
                                {group.projects.map((project) => (
                                    <li key={project.id} className="bg-white p-4 flex items-center justify-between rounded-xs text-gray-700">
                                        <div className="flex items-center space-x-4">
                                            {/* Proje İkonu */}
                                            <div className={`w-10 h-10 flex flex-none items-center justify-center text-lg font-bold text-white rounded-xs ${group.iconColor}`}>
                                                {project.name.charAt(0).toUpperCase()}
                                            </div>
                                            {/* Proje Bilgileri */}
                                            <div>
                                                <h3 className="text-md font-semibold">{project.name}</h3>
                                                <p className="text-xs text-gray-500">{project.description}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-2 py-1 text-xs rounded ${project.status === "legacy" ? "bg-red-300 text-red-800" : "bg-green-300 text-green-800"}`}>
                                                {project.status}
                                            </span>
                                            <span className="text-sm text-gray-500">📦 {project.repositories}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
