/**
 * DEMONSTRATION PROJECTS — these are realistic portfolio examples, not claims
 * of client or workplace experience. Replace each entry with your own work and
 * set `demo: false` only once the content describes real, verifiable work.
 */
export const projects = [
  {
    id: 'enterprise-lan',
    number: '01',
    title: 'Enterprise Network Infrastructure Design',
    category: 'LAN Architecture',
    demo: true,
    summary:
      'A layered enterprise LAN design built to keep departments isolated, users productive and network documentation clear.',
    problem:
      'A growing organisation needed a structured internal network. Flat addressing and a single broadcast domain made growth difficult and left sensitive departments sharing the same network segment.',
    solution:
      'Designed a hierarchical LAN with VLAN segmentation per department, trunked uplinks between distribution and access switches, inter-VLAN routing on a core Layer 3 switch, and centralised DHCP services. The final topology was documented for handover and future expansion.',
    highlights: [
      'Department VLANs with documented IP addressing scheme',
      'Inter-VLAN routing with controlled gateway placement',
      'Central DHCP scope design and trunk/access port standards',
      'Topology diagram and port mapping documentation',
    ],
    technologies: ['Cisco IOS', 'VLAN', 'Trunking', 'Inter-VLAN Routing', 'DHCP', 'Packet Tracer'],
    diagram: 'lan',
  },
  {
    id: 'multi-branch-wan',
    number: '02',
    title: 'Multi-Branch Network Configuration',
    category: 'WAN & Routing',
    demo: true,
    summary:
      'A branch interconnectivity design that keeps remote sites reachable and traffic paths resilient.',
    problem:
      'Multiple branch sites needed reliable communication with headquarters while avoiding a single point of failure on the wide area links.',
    solution:
      'Configured WAN links between sites, deployed dynamic routing so branches could learn remote networks automatically, and added a secondary path for redundancy. Route behaviour and failover were validated through simulated link failures.',
    highlights: [
      'WAN links between headquarters and branch sites',
      'Dynamic route advertisement across all sites',
      'Redundant path tested through link-failure scenarios',
      'Standardised router configuration templates',
    ],
    technologies: ['Cisco Routers', 'OSPF', 'WAN', 'Static Routes', 'GNS3', 'Wireshark'],
    diagram: 'wan',
  },
  {
    id: 'security-implementation',
    number: '03',
    title: 'Network Security Implementation',
    category: 'Security',
    demo: true,
    summary:
      'A defence-in-depth configuration that limits lateral movement and controls access to critical systems.',
    problem:
      'Management services and server segments were reachable from general user VLANs, creating unnecessary exposure to sensitive infrastructure.',
    solution:
      'Applied ACLs at network boundaries, segmented servers from user traffic, defined firewall policies for approved flows, and enforced port security on access switches. Changes were verified with connectivity tests from authorised and unauthorised hosts.',
    highlights: [
      'ACLs restricting traffic to management and server VLANs',
      'Firewall policy set for approved applications',
      'Port security and MAC-limit controls on access ports',
      'Validation tests from trusted and untrusted segments',
    ],
    technologies: ['ACLs', 'Firewall', 'Network Segmentation', 'Port Security', 'VPN'],
    diagram: 'security',
  },
  {
    id: 'monitoring-troubleshooting',
    number: '04',
    title: 'Network Monitoring & Troubleshooting',
    category: 'Performance',
    demo: true,
    summary:
      'A structured approach to finding the root cause of intermittent outages and slow application performance.',
    problem:
      'Users reported intermittent application slowdowns, but no clear evidence showed whether the cause was the network, the server or the client devices.',
    solution:
      'Captured and analysed traffic with Wireshark, compared interface utilisation and error counters, and isolated the issue to excessive broadcast traffic from a misconfigured segment. Corrected the configuration and documented a repeatable troubleshooting workflow.',
    highlights: [
      'Packet capture and protocol-level analysis',
      'Interface error and utilisation review',
      'Broadcast domain issue identified and corrected',
      'Reusable troubleshooting checklist documented',
    ],
    technologies: ['Wireshark', 'Packet Analysis', 'SNMP Monitoring', 'Cisco IOS', 'Linux'],
    diagram: 'monitor',
  },
]
