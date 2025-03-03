"use client";
import { useEffect, useState } from "react";
import { BeakerIcon, RectangleGroupIcon, DocumentIcon, ArchiveBoxIcon, FolderIcon } from '@heroicons/react/24/outline'

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
            <div className="grid gap-2">
                {groups.map((group) => (
                    <GroupItem key={group.id} group={group} parentName={null} />
                ))}
            </div>
        </div>
    );
}

function GroupItem({ group, parentName }) {
    const [isOpen, setIsOpen] = useState(false); // Grup açık/kapalı kontrolü
    const formattedGroupName = group.name.toLowerCase().replace(/ /g, "-"); // Grup adını formatla

    return (
        <div>
            {/* Grup Başlığı */}
            <div className="group relative bg-white p-6 flex items-center justify-between rounded-xs cursor-pointer hover:bg-gray-50" onClick={() => setIsOpen(!isOpen)}>
                <button className={`absolute -left-2 bg-white rounded-full w-6 h-6 text-black text-[10px] group-hover:bg-gray-50 ${isOpen ? "" : "▶"}`}>
                    {isOpen ? "▼" : "▶"}
                </button>
                <div className="flex items-center gap-3">
                    <FolderIcon className="size-4" />
                    <div className={`w-10 h-10 flex flex-none items-center justify-center text-lg font-bold rounded-xs bg-${group.color}-100`}>
                        <span className={`text-${group.color}-800`}>{group.name.charAt(0).toUpperCase()}</span>
                    </div>
                    <div>
                        <h2 className="text-md font-semibold">{group.name}</h2>
                        <p className="text-xs text-gray-500">{group.description}</p>
                        <div className="text-xs text-gray-400">
                            {parentName ? `${parentName.toLowerCase().replace(/ /g, "-")} / ${formattedGroupName}` : formattedGroupName}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-600">
                    <div className="px-3 py-1 bg-gray-100 rounded-full">{group.role}</div>
                    <div className="flex items-center gap-2">
                        <FolderIcon className="size-4" />
                        <span>{group.groups.length}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <DocumentIcon className="size-4" />
                        <span>{group.groups.reduce((acc, subgroup) => acc + subgroup.projects.length, 0) + group.projects.length}</span>
                    </div>
                </div>
            </div>

            {/* İçerik - Alt Gruplar ve Projeler */}
            {isOpen && (
                <div className="ml-4 mt-3 border-l-2 border-white pl-4">
                    {/* Alt Gruplar */}
                    {group.groups.length > 0 && (
                        <div className="grid gap-2">
                            {group.groups.map((subgroup) => (
                                <GroupItem key={subgroup.id} group={subgroup} parentName={formattedGroupName} />
                            ))}
                        </div>
                    )}

                    {/* Projeler */}
                    {group.projects.length > 0 && (
                        <div className="mt-3">
                            <ul className="grid gap-1">
                                {group.projects.map((project) => {
                                    const formattedProjectName = project.name.toLowerCase().replace(/ /g, "-"); // Proje adını formatla
                                    return (
                                        <li key={project.id} className="bg-white p-4 flex items-center justify-between rounded-xs text-gray-700">
                                            <div className="flex items-start space-x-4">
                                                <div className="h-10 flex items-center justify-center">
                                                    <DocumentIcon className="size-4" />
                                                </div>
                                                {/* Proje İkonu */}
                                                <div className={`w-10 h-10 flex flex-none items-center justify-center text-lg font-bold text-white rounded-xs bg-${group.color}-100`}>
                                                    <span className={`text-${group.color}-800`}>{project.name.charAt(0).toUpperCase()}</span>
                                                </div>
                                                {/* Proje Bilgileri */}
                                                <div className="grid gap-0.5">
                                                    <h3 className="text-md font-semibold">{project.name}</h3>
                                                    <p className="text-xs text-gray-500">{project.description}</p>
                                                    <div className="text-xs text-gray-400">
                                                        {parentName ? `${parentName.toLowerCase().replace(/ /g, "-")} / ${formattedProjectName}` : formattedProjectName}
                                                    </div>
                                                    <div>
                                                        <span className={`inline-block px-3 py-1 text-xs rounded-full bg-gray-100 ${project.status === "active" ? "bg-gray-100 text-gray-800" : "bg-yellow-100 text-yellow-800"}`}>
                                                            {project.status}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
