const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-lg font-bold">PayMaster Ltd</p>
            <p className="text-sm text-white/80">Transportation & Logistics Services</p>
            <p className="text-sm text-white/80">Rubavu District, Western Province, Rwanda</p>
          </div>

          <div>
            <p className="font-semibold mb-2">EPMS</p>
            <ul className="text-sm text-white/80 space-y-2">
              <li>Employees & Departments</li>
              <li>Salary management</li>
              <li>Reports & insights</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Contact</p>
            <p className="text-sm text-white/80">Email: info@paymaster.example</p>
            <p className="text-sm text-white/80">Phone: +250 792 345825</p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/60">
          © {new Date().getFullYear()} PayMaster Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

