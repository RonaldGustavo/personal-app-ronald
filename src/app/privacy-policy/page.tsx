export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to our applications (Tebak Warna Yuk, Kepret Tikus Simulator, Kue Ultah Simulator, 
            Lele Terbang, Penalty Football, Renungan Rohani Kristen). We respect your privacy and are committed 
            to protecting your personal data. This privacy policy informs you how we handle data across all 
            our applications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Data Collection</h2>
          <p>
            Our applications utilize Google AdMob for advertising. Google AdMob may collect and use 
            data for advertising purposes. This may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Device information (such as device model, OS version)</li>
            <li>Advertising identifiers</li>
            <li>Usage data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Third-Party Services</h2>
          <p>
            We use Google AdMob to display advertisements. AdMob uses cookies and mobile device identifiers 
            to serve personalized ads based on your interests and usage patterns.
          </p>
          <p className="mt-2">
            For more information on how Google uses data when you use our app, please visit:{' '}
            <a 
              href="https://policies.google.com/technologies/partner-sites" 
              className="text-blue-600 hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy & Terms
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Children&apos;s Privacy</h2>
          <p>
            Our application is designed for a general audience. We do not knowingly collect personally 
            identifiable information from children under 13 years of age.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Name: Ronald Gustavo</li>
            <li>Email: Ronaldgustavo.rg@gmail.com</li>
            <li>Phone: +62 812-7854-1350</li>
            <li>Website: https://ronaldgustavo.my.id</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
