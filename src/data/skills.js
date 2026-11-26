/**
 * Skills are grouped by professional domain. No proficiency percentages are
 * assigned — add them yourself only when you can rate them honestly.
 */
export const skillCategories = [
  {
    id: 'networking-fundamentals',
    title: 'Networking Fundamentals',
    description: 'The protocol foundations behind every dependable network.',
    icon: 'Network',
    accent: 'sky',
    skills: ['TCP/IP', 'OSI Model', 'IPv4 & IPv6', 'Subnetting & CIDR', 'VLANs', 'DHCP', 'DNS', 'NAT'],
  },
  {
    id: 'routing-switching',
    title: 'Routing & Switching',
    description: 'Moving traffic efficiently across LAN and WAN environments.',
    icon: 'Route',
    accent: 'blue',
    skills: [
      'Static & Dynamic Routing',
      'OSPF',
      'EIGRP',
      'BGP',
      'STP',
      'Inter-VLAN Routing',
      'EtherChannel',
      'Cisco Switching',
    ],
  },
  {
    id: 'network-security',
    title: 'Network Security',
    description: 'Controlling access and reducing the network attack surface.',
    icon: 'ShieldCheck',
    accent: 'cyan',
    skills: [
      'Access Control Lists (ACLs)',
      'Firewalls',
      'VPN Configuration',
      'Network Access Control',
      'Port Security',
      'Network Segmentation',
    ],
  },
  {
    id: 'infrastructure',
    title: 'Network Infrastructure',
    description: 'Physical and logical building blocks of connected organisations.',
    icon: 'Server',
    accent: 'indigo',
    skills: [
      'Cisco Routers & Switches',
      'Wireless Access Points',
      'LAN/WAN Infrastructure',
      'Structured Cabling',
      'Network Topology Design',
      'Network Documentation',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    description: 'The practical toolkit used to build, test and troubleshoot.',
    icon: 'TerminalSquare',
    accent: 'teal',
    skills: [
      'Cisco Packet Tracer',
      'GNS3',
      'Wireshark',
      'PuTTY',
      'VMware',
      'Linux',
      'Windows Server',
    ],
  },
]
