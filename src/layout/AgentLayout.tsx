import BaseDashboardLayout from "./BaseDashboardLayout";
import {
  LayoutDashboard,
  ClipboardList,
  BarChart3,
  Users,
  AlertTriangle,
  MessageSquare,
  Settings,
  LogOut,
  File,
  User,
  ShieldCheck,
} from "lucide-react";

function AgentLayout() {
  const navItems = [
    {
      path: "/Dashboard",
      icon: <LayoutDashboard size={25} />,
      label: "Dashboard",
    },
   
    {
      path: "/Tracker",
      icon: <ClipboardList size={25} />,
      label: "DBS Tracker",
    },
    {
      path: "/IncidentMgt",
      icon: <AlertTriangle size={25} />,
      label: "Incident Mgt",
    },

    {
      path: "/Payment",
      icon: <File size={25} />,
      label: "Payment Log",
    },
    {
      path: "/Reports",
      icon: <BarChart3 size={25} />,
      label: "Reports & Analytics",
    },

    {
      path: "/Communication",
      icon: <MessageSquare size={25} />,
      label: "Communication",
    },

     {
      path: "/Applicant",
      icon: <Users size={25} />,
      label: "Applicant Mgt",
    },

    {
      path: "/ControlPanel",
      icon: <Settings size={25} />,
      label: "Control Panel",
    },

    {
      path: "/Profile",
      icon: <User size={25} />,
      label: "Profile",
    },

    {
      path: "/Security",
      icon: <ShieldCheck size={25} />,
      label: "Security",
    },

    {
      path: "/Logout",
      icon: <LogOut size={25} />,
      label: "Logout",
    },
  ];

  return <BaseDashboardLayout navItems={navItems} title={"AGENT"} />;
}

export default AgentLayout;
