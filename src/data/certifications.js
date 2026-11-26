/**
 * IMPORTANT: every item below defaults to "planned" because no credentials
 * have been supplied. Change `status` to 'earned' or 'in progress' and fill in
 * the real completion date and credential URL only when they actually exist.
 */
export const certifications = [
  {
    id: 'ccna',
    name: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    date: 'Add completion date',
    status: 'planned',
    credentialUrl: '',
    type: 'certification',
  },
  {
    id: 'ccnp',
    name: 'Cisco Certified Network Professional (CCNP)',
    issuer: 'Cisco',
    date: 'Add completion date',
    status: 'planned',
    credentialUrl: '',
    type: 'certification',
  },
  {
    id: 'network-plus',
    name: 'CompTIA Network+',
    issuer: 'CompTIA',
    date: 'Add completion date',
    status: 'planned',
    credentialUrl: '',
    type: 'certification',
  },
  {
    id: 'security-plus',
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: 'Add completion date',
    status: 'planned',
    credentialUrl: '',
    type: 'certification',
  },
  {
    id: 'microsoft',
    name: 'Microsoft Certification',
    issuer: 'Microsoft',
    date: 'Add certification name and date',
    status: 'planned',
    credentialUrl: '',
    type: 'certification',
  },
  {
    id: 'academic',
    name: 'Academic Qualification',
    issuer: 'Add institution name',
    date: 'Add graduation date',
    status: 'planned',
    credentialUrl: '',
    type: 'education',
  },
]

export const statusStyles = {
  earned: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  'in progress': 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  planned: 'border-slate-500/30 bg-slate-500/10 text-slate-400',
}
