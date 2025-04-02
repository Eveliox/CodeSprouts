import ContactForm from "@/components/ContactForm";

import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact CodeSprouts - Summer Coding Camp</title>
        <meta name="description" content="Get in touch with CodeSprouts for questions about our coding summer camp, registration process, or program details." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>
      
      <section className="bg-[#4361EE] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">Have questions about our summer camp? We're here to help!</p>
        </div>
      </section>
      
      <section id="contact" className="py-16 bg-[#4361EE] text-white scroll-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h2 className="font-heading font-bold text-3xl mb-6">Get In Touch</h2>
              
              <p className="mb-8 text-lg opacity-90">Reach out using any of the methods below or fill out our contact form.</p>
              
              <div className="space-y-6">

                
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1"><i className="fas fa-phone"></i></span>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">Phone</h3>
                    <p>786-920-1239</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1"><i className="fas fa-envelope"></i></span>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">Email</h3>
                    <p>codesproutsmiami@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1"><i className="fas fa-clock"></i></span>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">Office Hours</h3>
                    <p>Monday-Friday: 9AM-5PM<br />Saturday: 10AM-2PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
              

            </div>
            
            <div className="md:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl mb-8 text-[#4361EE] text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F8F9FA] p-6 rounded-xl shadow-md">
              <h3 className="font-heading font-bold text-xl mb-3 text-[#7209B7]">What ages do you accept?</h3>
              <p>Our summer camp is designed for children ages 8-14. We group campers by age and experience level to ensure appropriate challenges.</p>
            </div>
            
            <div className="bg-[#F8F9FA] p-6 rounded-xl shadow-md">
              <h3 className="font-heading font-bold text-xl mb-3 text-[#7209B7]">Does my child need prior coding experience?</h3>
              <p>No prior experience is needed! We welcome beginners and will assess each child's level to provide appropriate instruction.</p>
            </div>
            
            <div className="bg-[#F8F9FA] p-6 rounded-xl shadow-md">
              <h3 className="font-heading font-bold text-xl mb-3 text-[#7209B7]">What is your refund policy?</h3>
              <p>Full refunds are available up to 14 days before the session starts. 50% refund up to 7 days before. Contact us for more details.</p>
            </div>
            
            <div className="bg-[#F8F9FA] p-6 rounded-xl shadow-md">
              <h3 className="font-heading font-bold text-xl mb-3 text-[#7209B7]">Do you provide lunch?</h3>
              <p>Campers should bring their own lunch and snacks. We provide water and occasional treats during special activities.</p>
            </div>
            
            <div className="bg-[#F8F9FA] p-6 rounded-xl shadow-md">
              <h3 className="font-heading font-bold text-xl mb-3 text-[#7209B7]">What is the instructor to student ratio?</h3>
              <p>We maintain a maximum 1:10 instructor to student ratio to ensure personalized attention for every camper.</p>
            </div>
            
            <div className="bg-[#F8F9FA] p-6 rounded-xl shadow-md">
              <h3 className="font-heading font-bold text-xl mb-3 text-[#7209B7]">Do you offer sibling discounts?</h3>
              <p>Yes! We offer a 10% discount for siblings and 15% off when registering for 3 or more weeks.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6 text-[#4361EE]">Location</h2>
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <div className="text-6xl text-[#4361EE] mb-6">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Location: TBA</h3>
            <p className="text-lg mb-4">
              Our camp location will be announced soon. We're finalizing a convenient, safe space with easy access to transportation.
            </p>
            <p className="text-lg">
              <i className="fas fa-info-circle text-[#F72585] mr-2"></i>
              Please check back later or contact us for the latest updates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
