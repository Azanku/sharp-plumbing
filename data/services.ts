export interface Service {
  slug: string
  title: string
  description: string
  content: string
  metaDescription: string
}

export interface ServiceCategory {
  slug: string
  title: string
  description: string
  content: string
  metaDescription: string
  services: Service[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'ac-services',
    title: 'AC Services',
    description: 'Sharp Plumbing offers comprehensive AC services to keep your home cool and comfortable during the hotter months. Our expert technicians are equipped to handle all aspects of air conditioning, from installation to repairs. We work with all major brands and models, ensuring your system operates at peak efficiency.',
    content: `Sharp Plumbing offers comprehensive AC services to keep your home cool and comfortable during the hotter months. Our expert technicians are equipped to handle all aspects of air conditioning, from installation to repairs. We work with all major brands and models, ensuring your system operates at peak efficiency.

Whether you need a new AC system installed, routine maintenance to keep your current system running smoothly, or emergency repairs when your cooling fails, our team is here to help. We pride ourselves on fast response times, quality workmanship, and competitive pricing.

Our AC services include:
- New AC system installation
- AC maintenance and tune-ups
- AC repair services
- Emergency AC repair
- System diagnostics and troubleshooting
- Refrigerant recharge
- Ductwork inspection and repair

Contact Sharp Plumbing today for all your air conditioning needs in the Independence, MO area.`,
    metaDescription: 'Sharp Plumbing offers comprehensive AC services in Independence, MO. Installation, maintenance, and repair for all major brands. Call (816) 207-3561 for same-day service.',
    services: [
      {
        slug: 'ac-installation',
        title: 'AC Installation',
        description: 'Professional AC installation services for homes in Independence, MO. Our certified technicians install all major brands and models to keep your home cool and comfortable.',
        content: `Professional AC installation services for homes in Independence, MO. Our certified technicians install all major brands and models to keep your home cool and comfortable.

When it's time for a new air conditioning system, Sharp Plumbing provides expert installation services tailored to your home's specific needs. We assess your space, recommend the right size and type of system, and install it with precision to ensure optimal performance and energy efficiency.

Our AC installation services include:
- System sizing and selection guidance
- Professional installation by certified technicians
- Ductwork assessment and modification if needed
- System testing and calibration
- Warranty on all installation work
- Removal and disposal of old equipment

Trust the local plumbers in Independence, MO for your AC installation needs. Call Sharp Plumbing today!`,
        metaDescription: 'Professional AC installation in Independence, MO. Sharp Plumbing installs all major brands with warranties on all work. Call (816) 207-3561 for free estimates.',
      },
      {
        slug: 'ac-maintenance',
        title: 'AC Maintenance',
        description: 'Regular AC maintenance keeps your system running efficiently and extends its lifespan. Sharp Plumbing offers comprehensive maintenance services for all makes and models.',
        content: `Regular AC maintenance keeps your system running efficiently and extends its lifespan. Sharp Plumbing offers comprehensive maintenance services for all makes and models.

Preventive maintenance is essential for keeping your air conditioning system in top condition. Our technicians perform thorough inspections, clean essential components, and identify potential issues before they become costly repairs.

Our AC maintenance services include:
- Filter replacement
- Coil cleaning
- Refrigerant level check
- Electrical connection inspection
- Thermostat calibration
- Condensate drain cleaning
- Overall system performance evaluation

Schedule your AC maintenance with Sharp Plumbing today and enjoy peace of mind all summer long.`,
        metaDescription: 'AC maintenance services in Independence, MO. Keep your system running efficiently with Sharp Plumbing. Same-day service available. Call (816) 207-3561.',
      },
      {
        slug: 'ac-repair',
        title: 'AC Repair',
        description: 'Fast, reliable AC repair services when you need them most. Sharp Plumbing technicians diagnose and fix all types of air conditioning problems.',
        content: `Fast, reliable AC repair services when you need them most. Sharp Plumbing technicians diagnose and fix all types of air conditioning problems.

When your AC breaks down, you need fast and reliable repair services. Our experienced technicians can diagnose and fix a wide range of air conditioning issues, from minor repairs to major component replacements.

Common AC problems we repair:
- No cooling or insufficient cooling
- Strange noises or odors
- System cycling on and off frequently
- Frozen evaporator coils
- Refrigerant leaks
- Electrical issues
- Thermostat malfunctions
- Compressor problems

Don't suffer through the heat - call Sharp Plumbing for prompt AC repair services in Independence, MO.`,
        metaDescription: 'AC repair services in Independence, MO. Sharp Plumbing provides fast, reliable repairs for all makes and models. Same-day service. Call (816) 207-3561.',
      },
      {
        slug: 'ac-tune-up',
        title: 'AC Tune-Up',
        description: 'Annual AC tune-ups help prevent breakdowns and improve efficiency. Sharp Plumbing offers thorough tune-up services to prepare your system for the cooling season.',
        content: `Annual AC tune-ups help prevent breakdowns and improve efficiency. Sharp Plumbing offers thorough tune-up services to prepare your system for the cooling season.

An AC tune-up is a comprehensive service that ensures your air conditioning system is ready to perform when you need it. Our technicians inspect, clean, and adjust all critical components to maximize efficiency and reliability.

Our AC tune-up includes:
- Complete system inspection
- Filter cleaning or replacement
- Coil cleaning
- Refrigerant level check and adjustment
- Electrical connection tightening
- Lubrication of moving parts
- Thermostat testing and calibration
- Safety inspection

Schedule your AC tune-up with Sharp Plumbing before the hot weather arrives!`,
        metaDescription: 'AC tune-up services in Independence, MO. Prepare your system for summer with Sharp Plumbing. Free estimates. Call (816) 207-3561.',
      },
    ],
  },
  {
    slug: 'appliances-installation',
    title: 'Appliances Installation',
    description: 'Installing appliances correctly is essential for safety and performance. Sharp Plumbing provides professional appliance installation services for kitchens, laundry rooms, and more. Our team ensures proper connections, compliance with local codes, and optimal functionality for your new appliances.',
    content: `Installing appliances correctly is essential for safety and performance. Sharp Plumbing provides professional appliance installation services for kitchens, laundry rooms, and more. Our team ensures proper connections, compliance with local codes, and optimal functionality for your new appliances.

Proper appliance installation is crucial for both safety and warranty protection. Our experienced technicians handle all aspects of installation, from water line connections to drain hookups and everything in between.

Our appliance installation services include:
- Dishwasher installation
- Faucet installation and repair
- Garbage disposal installation and repair
- Shower installation and repair
- Sink installation and repair
- Sump pump installation and repair
- Toilet installation and repair

Trust Sharp Plumbing for all your appliance installation needs in the Independence, MO area.`,
    metaDescription: 'Professional appliance installation in Independence, MO. Sharp Plumbing installs dishwashers, faucets, disposals, and more. Call (816) 207-3561.',
    services: [
      {
        slug: 'dishwasher-installation',
        title: 'Dishwasher Installation',
        description: 'Professional dishwasher installation services. Our plumbers ensure proper water supply, drainage, and electrical connections for your new dishwasher.',
        content: `Professional dishwasher installation services. Our plumbers ensure proper water supply, drainage, and electrical connections for your new dishwasher.

Installing a dishwasher requires proper plumbing and electrical connections. Our skilled technicians handle the entire installation process, ensuring your new dishwasher operates safely and efficiently.

Our dishwasher installation includes:
- Removal of old dishwasher (if applicable)
- Water supply line connection
- Drain line installation
- Electrical hookup
- Leveling and securing
- Leak testing
- Operation verification

Call Sharp Plumbing for professional dishwasher installation in Independence, MO.`,
        metaDescription: 'Dishwasher installation in Independence, MO. Sharp Plumbing provides professional installation with proper connections. Call (816) 207-3561.',
      },
      {
        slug: 'faucet-installation',
        title: 'Faucet Installation',
        description: 'Expert faucet installation for kitchens and bathrooms. We install all types and brands of faucets with precision and care.',
        content: `Expert faucet installation for kitchens and bathrooms. We install all types and brands of faucets with precision and care.

A new faucet can transform the look of your kitchen or bathroom. Our plumbers install all types of faucets, from standard models to high-end fixtures, ensuring proper connections and leak-free operation.

Our faucet installation services include:
- Kitchen faucet installation
- Bathroom faucet installation
- Utility sink faucet installation
- Removal of old fixtures
- Supply line connections
- Leak testing and verification

Upgrade your fixtures with Sharp Plumbing's professional faucet installation services.`,
        metaDescription: 'Faucet installation in Independence, MO. Sharp Plumbing installs kitchen and bathroom faucets. Free estimates. Call (816) 207-3561.',
      },
      {
        slug: 'faucet-repair',
        title: 'Faucet Repair',
        description: 'Professional faucet repair services for leaky, dripping, or malfunctioning faucets. We fix all types and brands.',
        content: `Professional faucet repair services for leaky, dripping, or malfunctioning faucets. We fix all types and brands.

A dripping faucet wastes water and money. Our skilled plumbers can repair all types of faucet problems, from simple washer replacements to more complex valve repairs.

Common faucet repairs we handle:
- Dripping faucets
- Leaking handles
- Low water pressure
- Corroded valve seats
- Worn washers and O-rings
- Loose handles
- Sprayer issues

Stop that annoying drip - call Sharp Plumbing for faucet repair services in Independence, MO.`,
        metaDescription: 'Faucet repair in Independence, MO. Sharp Plumbing fixes leaky and malfunctioning faucets. Same-day service. Call (816) 207-3561.',
      },
      {
        slug: 'garbage-disposal-installation',
        title: 'Garbage Disposal Installation',
        description: 'Professional garbage disposal installation services. We install all major brands and ensure proper electrical and plumbing connections.',
        content: `Professional garbage disposal installation services. We install all major brands and ensure proper electrical and plumbing connections.

A garbage disposal is a convenient kitchen appliance that requires proper installation for safe operation. Our technicians install all major brands and models, ensuring proper electrical connections and drainage.

Our garbage disposal installation includes:
- Removal of old disposal (if applicable)
- Mounting assembly installation
- Electrical hookup
- Drain connection
- Testing and verification
- Proper disposal of old unit

Call Sharp Plumbing for professional garbage disposal installation in Independence, MO.`,
        metaDescription: 'Garbage disposal installation in Independence, MO. Sharp Plumbing provides professional installation. Call (816) 207-3561 for service.',
      },
      {
        slug: 'garbage-disposal-repair',
        title: 'Garbage Disposal Repair',
        description: 'Expert garbage disposal repair services. We diagnose and fix jammed, leaking, or malfunctioning disposals quickly.',
        content: `Expert garbage disposal repair services. We diagnose and fix jammed, leaking, or malfunctioning disposals quickly.

When your garbage disposal stops working, our experienced plumbers can quickly diagnose and repair the problem. We handle all types of disposal issues, from simple jams to motor replacements.

Common garbage disposal problems we repair:
- Jammed disposals
- Humming but not grinding
- Leaking from the bottom
- No power
- Poor grinding performance
- Unusual noises
- Clogged drain lines

Don't let a broken disposal slow you down - call Sharp Plumbing for fast repair service.`,
        metaDescription: 'Garbage disposal repair in Independence, MO. Sharp Plumbing fixes jammed and malfunctioning disposals. Call (816) 207-3561.',
      },
      {
        slug: 'shower-installation',
        title: 'Shower Installation',
        description: 'Professional shower installation services. From shower heads to complete shower systems, we handle it all.',
        content: `Professional shower installation services. From shower heads to complete shower systems, we handle it all.

Whether you're upgrading your shower head or installing a complete new shower system, Sharp Plumbing provides expert installation services. We ensure proper water supply, drainage, and waterproofing for years of trouble-free use.

Our shower installation services include:
- Shower head installation
- Shower valve installation
- Complete shower system installation
- Walk-in shower conversion
- Shower pan installation
- Drain installation
- Water supply connections

Transform your bathroom with Sharp Plumbing's professional shower installation services.`,
        metaDescription: 'Shower installation in Independence, MO. Sharp Plumbing installs shower heads, valves, and complete systems. Call (816) 207-3561.',
      },
      {
        slug: 'shower-repair',
        title: 'Shower Repair',
        description: 'Expert shower repair services for leaks, low pressure, and other shower problems. We fix all types of showers.',
        content: `Expert shower repair services for leaks, low pressure, and other shower problems. We fix all types of showers.

Shower problems can range from annoying to serious. Our experienced plumbers diagnose and repair all types of shower issues, from simple fixes to complex repairs.

Common shower repairs we handle:
- Leaking shower heads
- Low water pressure
- Temperature control issues
- Dripping valves
- Clogged shower drains
- Cracked or damaged shower pans
- Grout and caulk repairs

Don't let shower problems disrupt your routine - call Sharp Plumbing for expert repair services.`,
        metaDescription: 'Shower repair in Independence, MO. Sharp Plumbing fixes leaks, low pressure, and more. Same-day service. Call (816) 207-3561.',
      },
      {
        slug: 'sink-installation',
        title: 'Sink Installation',
        description: 'Professional sink installation for kitchens, bathrooms, and utility areas. We install all types of sinks with precision.',
        content: `Professional sink installation for kitchens, bathrooms, and utility areas. We install all types of sinks with precision.

Installing a new sink requires proper plumbing connections and mounting. Our skilled technicians install all types of sinks, from drop-in models to undermount and vessel sinks.

Our sink installation services include:
- Kitchen sink installation
- Bathroom sink installation
- Utility sink installation
- Pedestal sink installation
- Vessel sink installation
- Removal of old sinks
- Drain and supply line connections

Upgrade your space with Sharp Plumbing's professional sink installation services.`,
        metaDescription: 'Sink installation in Independence, MO. Sharp Plumbing installs kitchen, bathroom, and utility sinks. Call (816) 207-3561.',
      },
      {
        slug: 'sink-repair',
        title: 'Sink Repair',
        description: 'Expert sink repair services for leaks, clogs, and other sink problems. We repair all types of sinks quickly.',
        content: `Expert sink repair services for leaks, clogs, and other sink problems. We repair all types of sinks quickly.

Sink problems can cause water damage and inconvenience. Our plumbers quickly diagnose and repair all types of sink issues, from simple clogs to complex leak repairs.

Common sink repairs we handle:
- Leaking drain pipes
- Clogged drains
- Slow draining sinks
- Faucet leaks
- Sprayer problems
- Garbage disposal connections
- P-trap repairs

Call Sharp Plumbing for fast, reliable sink repair services in Independence, MO.`,
        metaDescription: 'Sink repair in Independence, MO. Sharp Plumbing fixes leaks, clogs, and more. Same-day service available. Call (816) 207-3561.',
      },
      {
        slug: 'sump-pump-installation',
        title: 'Sump Pump Installation',
        description: 'Professional sump pump installation to protect your basement from flooding. We install all types of sump pump systems.',
        content: `Professional sump pump installation to protect your basement from flooding. We install all types of sump pump systems.

A properly installed sump pump is essential for protecting your basement from water damage. Our technicians install all types of sump pump systems, including primary pumps, battery backup systems, and combination units.

Our sump pump installation includes:
- Sump pit installation or preparation
- Primary pump installation
- Battery backup system installation
- Check valve installation
- Discharge line routing
- System testing
- Maintenance guidance

Protect your home from flooding with Sharp Plumbing's professional sump pump installation.`,
        metaDescription: 'Sump pump installation in Independence, MO. Sharp Plumbing protects your basement from flooding. Call (816) 207-3561 for service.',
      },
      {
        slug: 'sump-pump-repair',
        title: 'Sump Pump Repair',
        description: 'Expert sump pump repair services. We diagnose and fix all types of sump pump problems to keep your basement dry.',
        content: `Expert sump pump repair services. We diagnose and fix all types of sump pump problems to keep your basement dry.

When your sump pump fails, your basement is at risk. Our experienced technicians quickly diagnose and repair all types of sump pump problems to restore protection against flooding.

Common sump pump repairs we handle:
- Pump not running
- Pump runs continuously
- Motor failures
- Float switch problems
- Check valve issues
- Discharge line clogs
- Power supply problems

Don't wait until it's too late - call Sharp Plumbing for sump pump repair services.`,
        metaDescription: 'Sump pump repair in Independence, MO. Sharp Plumbing fixes all sump pump problems. Emergency service available. Call (816) 207-3561.',
      },
      {
        slug: 'toilet-installation',
        title: 'Toilet Installation',
        description: 'Professional toilet installation services. We install all types of toilets, from standard to high-efficiency models.',
        content: `Professional toilet installation services. We install all types of toilets, from standard to high-efficiency models.

Installing a toilet requires proper mounting, water supply connections, and seal installation. Our plumbers install all types of toilets, ensuring proper operation and a secure, leak-free seal.

Our toilet installation includes:
- Removal of old toilet
- Flange inspection and repair
- Wax ring installation
- Toilet mounting and leveling
- Water supply connection
- Tank and bowl alignment
- Leak testing

Upgrade your bathroom with Sharp Plumbing's professional toilet installation services.`,
        metaDescription: 'Toilet installation in Independence, MO. Sharp Plumbing installs all types of toilets professionally. Call (816) 207-3561.',
      },
      {
        slug: 'toilet-repair',
        title: 'Toilet Repair',
        description: 'Expert toilet repair services for leaks, clogs, running toilets, and more. We fix all toilet problems quickly.',
        content: `Expert toilet repair services for leaks, clogs, running toilets, and more. We fix all toilet problems quickly.

Toilet problems can waste water and cause damage. Our experienced plumbers quickly diagnose and repair all types of toilet issues, from simple fixes to complete rebuilds.

Common toilet repairs we handle:
- Running toilets
- Clogged toilets
- Leaking at the base
- Weak flushing
- Ghost flushing
- Tank leaks
- Fill valve problems
- Flapper replacement

Stop wasting water - call Sharp Plumbing for expert toilet repair services.`,
        metaDescription: 'Toilet repair in Independence, MO. Sharp Plumbing fixes running, leaking, and clogged toilets. Call (816) 207-3561.',
      },
    ],
  },
  {
    slug: 'boiler-and-radiator-plumbing',
    title: 'Boiler and Radiator Plumbing',
    description: 'Keep your heating system running smoothly with our boiler and radiator plumbing services. We handle installation, maintenance, and repairs for all types of boilers and radiators. Our skilled plumbers ensure efficient heat distribution and reliable performance throughout your home.',
    content: `Keep your heating system running smoothly with our boiler and radiator plumbing services. We handle installation, maintenance, and repairs for all types of boilers and radiators. Our skilled plumbers ensure efficient heat distribution and reliable performance throughout your home.

Boiler and radiator systems require specialized knowledge and expertise. Our technicians are trained to work with all types of hydronic heating systems, ensuring your home stays warm and comfortable all winter long.

Our boiler and radiator services include:
- Boiler installation
- Boiler repair and maintenance
- Radiator installation
- Radiator repair and bleeding
- System flushing and cleaning
- Expansion tank service
- Circulator pump repair

Trust Sharp Plumbing for all your boiler and radiator plumbing needs in Independence, MO.`,
    metaDescription: 'Boiler and radiator plumbing services in Independence, MO. Sharp Plumbing handles installation, maintenance, and repairs. Call (816) 207-3561.',
    services: [
      {
        slug: 'boiler-installation',
        title: 'Boiler Installation',
        description: 'Professional boiler installation services. We install all types of boilers for efficient home heating.',
        content: `Professional boiler installation services. We install all types of boilers for efficient home heating.

When it's time for a new boiler, Sharp Plumbing provides expert installation services. We help you select the right size and type of boiler for your home, then install it with precision for optimal performance and efficiency.

Our boiler installation includes:
- System sizing and selection
- Removal of old boiler
- New boiler installation
- Piping connections
- Venting installation
- Safety controls setup
- System testing and startup

Call Sharp Plumbing for professional boiler installation in Independence, MO.`,
        metaDescription: 'Boiler installation in Independence, MO. Sharp Plumbing installs all types of boilers professionally. Call (816) 207-3561.',
      },
      {
        slug: 'boiler-repair',
        title: 'Boiler Repair',
        description: 'Expert boiler repair services. We diagnose and fix all types of boiler problems to restore your heating.',
        content: `Expert boiler repair services. We diagnose and fix all types of boiler problems to restore your heating.

When your boiler stops working, you need fast, reliable repair service. Our experienced technicians diagnose and repair all types of boiler problems, from minor issues to major component replacements.

Common boiler repairs we handle:
- No heat production
- Insufficient heating
- Strange noises
- Pilot light problems
- Pressure issues
- Leaking boilers
- Circulator pump failures
- Thermostat problems

Don't freeze - call Sharp Plumbing for expert boiler repair services.`,
        metaDescription: 'Boiler repair in Independence, MO. Sharp Plumbing fixes all boiler problems. Emergency service available. Call (816) 207-3561.',
      },
      {
        slug: 'radiator-installation',
        title: 'Radiator Installation',
        description: 'Professional radiator installation services. We install new radiators and expand existing heating systems.',
        content: `Professional radiator installation services. We install new radiators and expand existing heating systems.

Adding or replacing radiators requires proper sizing and piping. Our technicians install all types of radiators, ensuring proper integration with your existing heating system.

Our radiator installation includes:
- Radiator sizing and selection
- Removal of old radiators
- Piping connections
- Valve installation
- Bleeding and balancing
- System testing

Improve your home's heating with Sharp Plumbing's radiator installation services.`,
        metaDescription: 'Radiator installation in Independence, MO. Sharp Plumbing installs and replaces radiators professionally. Call (816) 207-3561.',
      },
      {
        slug: 'radiator-repair',
        title: 'Radiator Repair',
        description: 'Expert radiator repair services for leaks, cold spots, and other radiator problems.',
        content: `Expert radiator repair services for leaks, cold spots, and other radiator problems.

Radiator problems can leave your home cold and uncomfortable. Our plumbers diagnose and repair all types of radiator issues, from simple bleeding to leak repairs and valve replacements.

Common radiator repairs we handle:
- Cold radiators
- Leaking radiators
- Air trapped in system
- Valve problems
- Corrosion issues
- Uneven heating
- Noisy radiators

Restore warmth to your home - call Sharp Plumbing for radiator repair services.`,
        metaDescription: 'Radiator repair in Independence, MO. Sharp Plumbing fixes cold, leaking, and noisy radiators. Call (816) 207-3561.',
      },
    ],
  },
  {
    slug: 'drains-and-pipes',
    title: 'Drains and Pipes',
    description: "From minor clogs to major pipe issues, Sharp Plumbing has you covered. We offer thorough drain cleaning, pipe repair, and replacement services to keep water flowing freely. Our advanced tools and techniques help prevent future blockages and maintain your plumbing system's health.",
    content: `From minor clogs to major pipe issues, Sharp Plumbing has you covered. We offer thorough drain cleaning, pipe repair, and replacement services to keep water flowing freely. Our advanced tools and techniques help prevent future blockages and maintain your plumbing system's health.

Your home's drain and pipe system is essential for daily life. Our experienced plumbers handle everything from routine drain cleaning to emergency pipe repairs, using the latest technology for accurate diagnosis and effective solutions.

Our drain and pipe services include:
- Backflow testing
- Burst pipe emergency repair
- Clogged drain cleaning
- Leak detection
- Pipe insulation
- Pipe replacement
- Repiping services
- Sewer line cleaning and repair

Trust Sharp Plumbing for all your drain and pipe needs in Independence, MO.`,
    metaDescription: 'Drain and pipe services in Independence, MO. Sharp Plumbing offers cleaning, repair, and replacement services. Call (816) 207-3561.',
    services: [
      {
        slug: 'backflow-testing',
        title: 'Backflow Testing',
        description: 'Professional backflow testing services to ensure your water supply stays safe and uncontaminated.',
        content: `Professional backflow testing services to ensure your water supply stays safe and uncontaminated.

Backflow prevention devices protect your drinking water from contamination. Our certified technicians perform thorough backflow testing to ensure your devices are working properly and meet local code requirements.

Our backflow testing includes:
- Device inspection
- Pressure testing
- Valve operation check
- Documentation and certification
- Repair recommendations if needed
- Code compliance verification

Protect your water supply - call Sharp Plumbing for backflow testing services.`,
        metaDescription: 'Backflow testing in Independence, MO. Sharp Plumbing provides certified testing and documentation. Call (816) 207-3561.',
      },
      {
        slug: 'burst-pipe-emergency-repair',
        title: 'Burst Pipe Emergency Repair',
        description: 'Emergency burst pipe repair services available 24/7. We respond quickly to minimize water damage.',
        content: `Emergency burst pipe repair services available 24/7. We respond quickly to minimize water damage.

A burst pipe is a plumbing emergency that requires immediate attention. Our emergency repair team responds quickly to stop the water flow, repair the damage, and help prevent further problems.

Our emergency burst pipe services include:
- Rapid response
- Water shutoff
- Pipe repair or replacement
- Water damage assessment
- Cleanup coordination
- Insurance documentation assistance

When disaster strikes, call Sharp Plumbing for emergency burst pipe repair.`,
        metaDescription: 'Burst pipe emergency repair in Independence, MO. Sharp Plumbing provides 24/7 emergency service. Call (816) 207-3561.',
      },
      {
        slug: 'clogged-drain-cleaning',
        title: 'Clogged Drain Cleaning',
        description: 'Professional drain cleaning services for stubborn clogs. We use advanced equipment to clear any blockage.',
        content: `Professional drain cleaning services for stubborn clogs. We use advanced equipment to clear any blockage.

Clogged drains can disrupt your daily routine. Our plumbers use advanced drain cleaning equipment, including hydro jetting and motorized augers, to clear even the toughest clogs.

Our drain cleaning services include:
- Kitchen drain cleaning
- Bathroom drain cleaning
- Floor drain cleaning
- Main line cleaning
- Video inspection
- Preventive maintenance
- Root removal

Don't let clogs slow you down - call Sharp Plumbing for professional drain cleaning.`,
        metaDescription: 'Clogged drain cleaning in Independence, MO. Sharp Plumbing clears all types of clogs. Same-day service. Call (816) 207-3561.',
      },
      {
        slug: 'leak-detection',
        title: 'Leak Detection',
        description: 'Advanced leak detection services to find hidden leaks before they cause major damage.',
        content: `Advanced leak detection services to find hidden leaks before they cause major damage.

Hidden leaks can cause significant water damage and increase your water bills. Our technicians use advanced leak detection technology to locate leaks quickly and accurately, minimizing damage and repair costs.

Our leak detection services include:
- Electronic leak detection
- Acoustic detection
- Thermal imaging
- Pressure testing
- Slab leak detection
- Underground leak detection
- Moisture mapping

Catch leaks early - call Sharp Plumbing for professional leak detection services.`,
        metaDescription: 'Leak detection in Independence, MO. Sharp Plumbing finds hidden leaks with advanced technology. Call (816) 207-3561.',
      },
      {
        slug: 'pipe-insulation-contractors',
        title: 'Pipe Insulation Contractors',
        description: 'Professional pipe insulation services to prevent freezing and improve energy efficiency.',
        content: `Professional pipe insulation services to prevent freezing and improve energy efficiency.

Proper pipe insulation protects your pipes from freezing in winter and reduces energy loss from hot water pipes. Our technicians install quality insulation to protect your plumbing system.

Our pipe insulation services include:
- Hot water pipe insulation
- Cold water pipe insulation
- Freeze protection
- Exterior pipe protection
- Basement and crawl space insulation
- Energy efficiency improvements

Protect your pipes - call Sharp Plumbing for pipe insulation services.`,
        metaDescription: 'Pipe insulation contractors in Independence, MO. Sharp Plumbing prevents freezing and saves energy. Call (816) 207-3561.',
      },
      {
        slug: 'pipe-replacement',
        title: 'Pipe Replacement',
        description: 'Professional pipe replacement services for damaged, corroded, or outdated pipes.',
        content: `Professional pipe replacement services for damaged, corroded, or outdated pipes.

When pipes are beyond repair, replacement is the best solution. Our plumbers replace all types of pipes, from small sections to complete home repiping, using quality materials that last.

Our pipe replacement services include:
- Section repairs
- Water line replacement
- Drain line replacement
- Gas line replacement
- Copper repiping
- PEX repiping
- Lead pipe replacement

Update your plumbing - call Sharp Plumbing for pipe replacement services.`,
        metaDescription: 'Pipe replacement in Independence, MO. Sharp Plumbing replaces damaged and outdated pipes. Call (816) 207-3561.',
      },
      {
        slug: 'repiping-services',
        title: 'Repiping Services',
        description: 'Complete home repiping services to replace old, failing plumbing with modern, reliable pipes.',
        content: `Complete home repiping services to replace old, failing plumbing with modern, reliable pipes.

If your home has old galvanized, polybutylene, or lead pipes, repiping can provide decades of trouble-free service. Our team handles complete home repiping projects with minimal disruption to your daily life.

Our repiping services include:
- Complete home repiping
- Material selection guidance
- Copper or PEX piping
- Wall and ceiling repair coordination
- Permit acquisition
- Inspection scheduling
- Warranty on all work

Upgrade your home's plumbing - call Sharp Plumbing for repiping services.`,
        metaDescription: 'Repiping services in Independence, MO. Sharp Plumbing replaces old pipes with modern materials. Call (816) 207-3561.',
      },
      {
        slug: 'sewer-line-cleaning',
        title: 'Sewer Line Cleaning',
        description: 'Professional sewer line cleaning to prevent backups and maintain proper flow.',
        content: `Professional sewer line cleaning to prevent backups and maintain proper flow.

Regular sewer line cleaning helps prevent costly backups and keeps your system flowing properly. Our technicians use advanced equipment to clean your sewer lines thoroughly.

Our sewer line cleaning includes:
- Video inspection
- Hydro jetting
- Root cutting
- Debris removal
- Preventive maintenance plans
- Recommendations for repairs if needed

Keep your sewer flowing - call Sharp Plumbing for sewer line cleaning services.`,
        metaDescription: 'Sewer line cleaning in Independence, MO. Sharp Plumbing prevents backups with professional cleaning. Call (816) 207-3561.',
      },
      {
        slug: 'sewer-line-repair',
        title: 'Sewer Line Repair',
        description: 'Expert sewer line repair services for damaged, cracked, or collapsed sewer pipes.',
        content: `Expert sewer line repair services for damaged, cracked, or collapsed sewer pipes.

Sewer line problems can cause backups, odors, and health hazards. Our experienced plumbers diagnose and repair all types of sewer line issues, from minor repairs to complete replacements.

Our sewer line repair services include:
- Video inspection and diagnosis
- Spot repairs
- Pipe lining (trenchless repair)
- Pipe bursting
- Traditional excavation repair
- Root removal
- Bellied pipe correction

Fix your sewer problems - call Sharp Plumbing for sewer line repair services.`,
        metaDescription: 'Sewer line repair in Independence, MO. Sharp Plumbing fixes all sewer line problems. Call (816) 207-3561.',
      },
    ],
  },
  {
    slug: 'drain-and-pump-services',
    title: 'Drain and Pump Services',
    description: 'Clogged drains and malfunctioning pumps can disrupt your daily life. Our local plumbers in Independence, MO offer efficient drain cleaning, repair, and installation services, as well as expert pump solutions for sump pumps, well pumps, and sewage pumps. We use advanced techniques and equipment to resolve issues quickly and prevent future problems.',
    content: `Clogged drains and malfunctioning pumps can disrupt your daily life. Our local plumbers in Independence, MO offer efficient drain cleaning, repair, and installation services, as well as expert pump solutions for sump pumps, well pumps, and sewage pumps. We use advanced techniques and equipment to resolve issues quickly and prevent future problems.

Sharp Plumbing provides comprehensive drain and pump services to keep your plumbing system functioning properly. From routine drain cleaning to emergency pump repairs, we have the expertise to handle any situation.

Our drain and pump services include:
- Drain cleaning
- Hydro jetting
- Pump installation and repair
- Video inspection
- Preventive maintenance

Trust the local plumbers in Independence, MO for all your drain and pump needs.`,
    metaDescription: 'Drain and pump services in Independence, MO. Sharp Plumbing offers cleaning, repair, and installation. Call (816) 207-3561.',
    services: [
      {
        slug: 'drain-cleaning',
        title: 'Drain Cleaning',
        description: 'Professional drain cleaning services to clear clogs and restore flow to your plumbing system.',
        content: `Professional drain cleaning services to clear clogs and restore flow to your plumbing system.

Regular drain cleaning keeps your plumbing flowing smoothly and prevents costly backups. Our technicians use professional-grade equipment to clean all types of drains.

Our drain cleaning services include:
- Kitchen drain cleaning
- Bathroom drain cleaning
- Floor drain cleaning
- Main line cleaning
- Preventive maintenance
- Video inspection

Keep your drains flowing - call Sharp Plumbing for professional drain cleaning.`,
        metaDescription: 'Drain cleaning in Independence, MO. Sharp Plumbing clears clogs and prevents backups. Call (816) 207-3561.',
      },
      {
        slug: 'hydro-jetting',
        title: 'Hydro Jetting',
        description: 'Powerful hydro jetting services to clear stubborn clogs and clean your pipes thoroughly.',
        content: `Powerful hydro jetting services to clear stubborn clogs and clean your pipes thoroughly.

Hydro jetting uses high-pressure water to blast away years of buildup, grease, and debris from your pipes. It's the most effective way to clean your plumbing system and restore full flow.

Our hydro jetting services include:
- Main sewer line cleaning
- Commercial drain cleaning
- Grease removal
- Root cutting
- Scale removal
- Preventive maintenance

Get the ultimate clean - call Sharp Plumbing for hydro jetting services.`,
        metaDescription: 'Hydro jetting in Independence, MO. Sharp Plumbing provides powerful drain cleaning. Call (816) 207-3561.',
      },
    ],
  },
  {
    slug: 'gas-line-services',
    title: 'Gas Line Services',
    description: 'Safety is paramount when it comes to gas line services, and Sharp Plumbing has the expertise to handle all your gas line needs. From installation and repair to leak detection and emergency services, our licensed professionals ensure your gas systems are secure and functioning correctly.',
    content: `Safety is paramount when it comes to gas line services, and Sharp Plumbing has the expertise to handle all your gas line needs. From installation and repair to leak detection and emergency services, our licensed professionals ensure your gas systems are secure and functioning correctly.

Gas line work requires specialized training and licensing. Our certified technicians follow strict safety protocols to protect your home and family while providing reliable gas line services.

Our gas line services include:
- Gas line installation
- Gas line repair
- Gas leak detection
- Gas appliance hookup
- Gas line inspection
- Emergency gas service

Trust Sharp Plumbing for all your gas line needs in Independence, MO.`,
    metaDescription: 'Gas line services in Independence, MO. Sharp Plumbing provides safe, professional installation and repair. Call (816) 207-3561.',
    services: [
      {
        slug: 'gas-line-installation',
        title: 'Gas Line Installation',
        description: 'Professional gas line installation for new appliances, additions, and new construction.',
        content: `Professional gas line installation for new appliances, additions, and new construction.

Adding a gas appliance or building a new home requires professional gas line installation. Our licensed technicians install gas lines safely and to code for all types of applications.

Our gas line installation services include:
- New appliance gas lines
- Outdoor gas lines for grills and fire pits
- Pool and spa heater lines
- Generator hookups
- New construction gas piping
- Gas line extensions
- Pressure testing and inspection

Add gas convenience safely - call Sharp Plumbing for gas line installation.`,
        metaDescription: 'Gas line installation in Independence, MO. Sharp Plumbing provides safe, code-compliant installation. Call (816) 207-3561.',
      },
      {
        slug: 'gas-line-repair',
        title: 'Gas Line Repair',
        description: 'Expert gas line repair services for leaks, damage, and other gas line problems.',
        content: `Expert gas line repair services for leaks, damage, and other gas line problems.

Gas line problems require immediate professional attention. Our licensed technicians quickly diagnose and repair all types of gas line issues, ensuring your safety and restoring service.

Our gas line repair services include:
- Leak repair
- Damaged line replacement
- Corrosion repair
- Valve replacement
- Regulator service
- Pressure testing
- Safety inspections

Don't take chances with gas - call Sharp Plumbing for professional gas line repair.`,
        metaDescription: 'Gas line repair in Independence, MO. Sharp Plumbing provides safe, professional repairs. Call (816) 207-3561.',
      },
    ],
  },
  {
    slug: 'heating-services',
    title: 'Heating Services',
    description: 'When winter arrives, trust us to keep your home warm and cozy. Our heating services cover furnace installation, repair, and maintenance, as well as heat pump solutions. We prioritize energy efficiency and safety in all our heating work, helping you stay comfortable while managing energy costs.',
    content: `When winter arrives, trust us to keep your home warm and cozy. Our heating services cover furnace installation, repair, and maintenance, as well as heat pump solutions. We prioritize energy efficiency and safety in all our heating work, helping you stay comfortable while managing energy costs.

Sharp Plumbing provides comprehensive heating services to keep your home comfortable all winter long. From emergency repairs to new installations, we have the expertise to handle all your heating needs.

Our heating services include:
- Furnace installation
- Furnace repair
- Furnace maintenance
- Heat pump services
- Ductwork repair
- Thermostat installation
- Emergency heating repair

Stay warm with Sharp Plumbing's professional heating services in Independence, MO.`,
    metaDescription: 'Heating services in Independence, MO. Sharp Plumbing provides furnace installation, repair, and maintenance. Call (816) 207-3561.',
    services: [
      {
        slug: 'heater-and-furnace-installation',
        title: 'Heater and Furnace Installation',
        description: 'Professional heater and furnace installation for efficient home heating.',
        content: `Professional heater and furnace installation for efficient home heating.

When it's time for a new heating system, Sharp Plumbing provides expert installation services. We help you select the right system for your home and budget, then install it properly for optimal performance and efficiency.

Our furnace installation services include:
- System sizing and selection
- High-efficiency furnace options
- Removal of old equipment
- Ductwork modification if needed
- Thermostat installation
- System testing and calibration
- Warranty on all work

Stay warm efficiently - call Sharp Plumbing for furnace installation.`,
        metaDescription: 'Heater and furnace installation in Independence, MO. Sharp Plumbing installs high-efficiency systems. Call (816) 207-3561.',
      },
      {
        slug: 'heater-and-furnace-maintenance',
        title: 'Heater and Furnace Maintenance',
        description: 'Regular furnace maintenance keeps your system running efficiently and prevents breakdowns.',
        content: `Regular furnace maintenance keeps your system running efficiently and prevents breakdowns.

Annual furnace maintenance is essential for safety, efficiency, and reliability. Our technicians perform thorough inspections and tune-ups to keep your heating system in top condition.

Our furnace maintenance includes:
- Filter replacement
- Burner cleaning
- Heat exchanger inspection
- Safety control testing
- Electrical connection check
- Blower motor inspection
- Overall efficiency evaluation

Prepare for winter - call Sharp Plumbing for furnace maintenance.`,
        metaDescription: 'Heater and furnace maintenance in Independence, MO. Sharp Plumbing keeps your system running efficiently. Call (816) 207-3561.',
      },
      {
        slug: 'heater-and-furnace-repair',
        title: 'Heater and Furnace Repair',
        description: 'Fast, reliable furnace repair services when you need heat most.',
        content: `Fast, reliable furnace repair services when you need heat most.

When your furnace stops working, you need fast, reliable repair service. Our experienced technicians diagnose and fix all types of furnace problems to restore your heat quickly.

Common furnace repairs we handle:
- No heat production
- Insufficient heating
- Cycling problems
- Strange noises
- Pilot light issues
- Ignition problems
- Blower motor failures
- Thermostat malfunctions

Don't freeze - call Sharp Plumbing for furnace repair services.`,
        metaDescription: 'Heater and furnace repair in Independence, MO. Sharp Plumbing provides fast, reliable repairs. Call (816) 207-3561.',
      },
    ],
  },
  {
    slug: 'septic-and-outdoor-services',
    title: 'Septic and Outdoor Services',
    description: 'Sharp Plumbing provides reliable septic and outdoor plumbing solutions to keep your property in top shape. From septic tank maintenance and repairs to outdoor water lines and irrigation systems, we ensure everything runs smoothly and meets local regulations.',
    content: `Sharp Plumbing provides reliable septic and outdoor plumbing solutions to keep your property in top shape. From septic tank maintenance and repairs to outdoor water lines and irrigation systems, we ensure everything runs smoothly and meets local regulations.

Outdoor plumbing and septic systems require specialized knowledge. Our experienced technicians handle all aspects of outdoor and septic plumbing to keep your property functioning properly.

Our septic and outdoor services include:
- Septic tank cleaning
- Septic tank installation
- Septic tank repair
- Outdoor plumbing repair
- Irrigation system service
- Outdoor faucet repair
- Water line installation

Trust Sharp Plumbing for all your septic and outdoor plumbing needs.`,
    metaDescription: 'Septic and outdoor services in Independence, MO. Sharp Plumbing handles septic tanks and outdoor plumbing. Call (816) 207-3561.',
    services: [
      {
        slug: 'outdoor-plumbing-repair',
        title: 'Outdoor Plumbing Repair',
        description: 'Professional outdoor plumbing repair for hose bibs, irrigation systems, and outdoor faucets.',
        content: `Professional outdoor plumbing repair for hose bibs, irrigation systems, and outdoor faucets.

Outdoor plumbing takes a beating from the elements. Our technicians repair all types of outdoor plumbing fixtures and systems to keep your property functioning properly.

Our outdoor plumbing repairs include:
- Hose bib repair and replacement
- Outdoor faucet repair
- Irrigation system repair
- Water line repairs
- Freeze damage repair
- Leak detection and repair

Fix your outdoor plumbing - call Sharp Plumbing today.`,
        metaDescription: 'Outdoor plumbing repair in Independence, MO. Sharp Plumbing fixes hose bibs, faucets, and more. Call (816) 207-3561.',
      },
      {
        slug: 'septic-tank-cleaning',
        title: 'Septic Tank Cleaning',
        description: 'Professional septic tank pumping and cleaning services to maintain your septic system.',
        content: `Professional septic tank pumping and cleaning services to maintain your septic system.

Regular septic tank pumping is essential for proper system function. Our technicians provide thorough cleaning services to prevent backups and extend the life of your septic system.

Our septic cleaning services include:
- Complete tank pumping
- Sludge and scum removal
- Tank inspection
- Baffle inspection
- Outlet filter cleaning
- Maintenance recommendations

Maintain your septic system - call Sharp Plumbing for septic tank cleaning.`,
        metaDescription: 'Septic tank cleaning in Independence, MO. Sharp Plumbing provides professional pumping services. Call (816) 207-3561.',
      },
      {
        slug: 'septic-tank-installation',
        title: 'Septic Tank Installation',
        description: 'Complete septic system installation for new construction and replacements.',
        content: `Complete septic system installation for new construction and replacements.

Installing a septic system requires proper design, permits, and professional installation. Our team handles all aspects of septic installation to ensure your system meets local codes and functions properly.

Our septic installation includes:
- Site evaluation
- System design
- Permit acquisition
- Tank installation
- Drain field installation
- Piping connections
- Final inspection

Build with confidence - call Sharp Plumbing for septic tank installation.`,
        metaDescription: 'Septic tank installation in Independence, MO. Sharp Plumbing provides complete installation services. Call (816) 207-3561.',
      },
      {
        slug: 'septic-tank-repair',
        title: 'Septic Tank Repair',
        description: 'Expert septic system repair services for tanks, drain fields, and related components.',
        content: `Expert septic system repair services for tanks, drain fields, and related components.

Septic problems require prompt professional attention. Our experienced technicians diagnose and repair all types of septic system issues to restore proper function.

Our septic repair services include:
- Tank repairs
- Baffle replacement
- Pump repairs
- Drain field repairs
- Distribution box service
- Pipe repairs
- Alarm system service

Fix your septic problems - call Sharp Plumbing for septic tank repair.`,
        metaDescription: 'Septic tank repair in Independence, MO. Sharp Plumbing fixes all septic system problems. Call (816) 207-3561.',
      },
    ],
  },
  {
    slug: 'sewer-services',
    title: 'Sewer Services',
    description: "Sharp Plumbing's sewer services keep your home's waste management system functioning smoothly. We provide sewer line inspection, cleaning, repair, and replacement services. Our local plumbers in Independence, MO use state-of-the-art technology for accurate diagnostics and minimally invasive solutions, ensuring your sewer system remains in optimal condition.",
    content: `Sharp Plumbing's sewer services keep your home's waste management system functioning smoothly. We provide sewer line inspection, cleaning, repair, and replacement services. Our local plumbers in Independence, MO use state-of-the-art technology for accurate diagnostics and minimally invasive solutions, ensuring your sewer system remains in optimal condition.

Your sewer system is critical for home sanitation. Our experienced plumbers handle all aspects of sewer service, from routine inspections to emergency repairs.

Our sewer services include:
- Sewage ejector installation
- Sewer line inspection
- Sewer line installation
- Sewer line replacement
- Video camera inspection
- Trenchless repair options

Trust the local plumbers in Independence, MO for all your sewer service needs.`,
    metaDescription: 'Sewer services in Independence, MO. Sharp Plumbing provides inspection, repair, and replacement services. Call (816) 207-3561.',
    services: [
      {
        slug: 'sewage-ejector-installation',
        title: 'Sewage Ejector Installation',
        description: 'Professional sewage ejector pump installation for basement bathrooms and below-grade plumbing.',
        content: `Professional sewage ejector pump installation for basement bathrooms and below-grade plumbing.

Basement bathrooms and other below-grade fixtures require a sewage ejector pump to move waste up to the main sewer line. Our technicians install reliable ejector systems for trouble-free operation.

Our sewage ejector installation includes:
- Pit installation
- Pump selection and installation
- Piping connections
- Check valve installation
- Electrical hookup
- System testing
- Maintenance guidance

Add a basement bathroom - call Sharp Plumbing for sewage ejector installation.`,
        metaDescription: 'Sewage ejector installation in Independence, MO. Sharp Plumbing installs basement bathroom pumps. Call (816) 207-3561.',
      },
      {
        slug: 'sewer-line-inspection',
        title: 'Sewer Line Inspection',
        description: 'Video camera sewer line inspection to diagnose problems and assess pipe condition.',
        content: `Video camera sewer line inspection to diagnose problems and assess pipe condition.

Our video inspection technology allows us to see inside your sewer lines without digging. This helps us diagnose problems accurately and recommend the most cost-effective solutions.

Our sewer inspection services include:
- HD video camera inspection
- Recording for review
- Problem location mapping
- Condition assessment
- Repair recommendations
- Pre-purchase inspections

See what's happening underground - call Sharp Plumbing for sewer line inspection.`,
        metaDescription: 'Sewer line inspection in Independence, MO. Sharp Plumbing uses video technology for accurate diagnosis. Call (816) 207-3561.',
      },
      {
        slug: 'sewer-line-installation',
        title: 'Sewer Line Installation',
        description: 'Professional sewer line installation for new construction and home additions.',
        content: `Professional sewer line installation for new construction and home additions.

New construction and additions require proper sewer line installation. Our team installs sewer lines to code, ensuring reliable waste management for your property.

Our sewer installation includes:
- Route planning
- Excavation
- Pipe installation
- Connection to main sewer
- Backfill and compaction
- Inspection and testing
- Site restoration

Build it right - call Sharp Plumbing for sewer line installation.`,
        metaDescription: 'Sewer line installation in Independence, MO. Sharp Plumbing provides professional installation. Call (816) 207-3561.',
      },
      {
        slug: 'sewer-line-replacement',
        title: 'Sewer Line Replacement',
        description: 'Complete sewer line replacement services using traditional and trenchless methods.',
        content: `Complete sewer line replacement services using traditional and trenchless methods.

When your sewer line is beyond repair, replacement is the best solution. We offer both traditional excavation and trenchless pipe bursting options to minimize disruption to your property.

Our sewer replacement options include:
- Traditional excavation
- Trenchless pipe bursting
- Pipe lining (CIPP)
- Material upgrade options
- Landscape restoration
- Warranty on all work

Replace your sewer line - call Sharp Plumbing for professional service.`,
        metaDescription: 'Sewer line replacement in Independence, MO. Sharp Plumbing offers traditional and trenchless options. Call (816) 207-3561.',
      },
    ],
  },
  {
    slug: 'specialized-plumbing-services',
    title: 'Specialized Plumbing Services',
    description: "For unique plumbing needs, Sharp Plumbing offers specialized services tailored to your home. Whether it's custom installations, advanced leak detection, or complex system upgrades, our experienced team delivers precise solutions with exceptional care.",
    content: `For unique plumbing needs, Sharp Plumbing offers specialized services tailored to your home. Whether it's custom installations, advanced leak detection, or complex system upgrades, our experienced team delivers precise solutions with exceptional care.

Some plumbing situations require specialized expertise. Our experienced team handles complex plumbing challenges with the skill and attention to detail your home deserves.

Our specialized plumbing services include:
- Emergency plumbing service
- Kitchen plumbing
- Plumbing inspection
- Custom installations
- System upgrades
- Complex repairs

Trust Sharp Plumbing for specialized plumbing solutions in Independence, MO.`,
    metaDescription: 'Specialized plumbing services in Independence, MO. Sharp Plumbing handles complex and custom projects. Call (816) 207-3561.',
    services: [
      {
        slug: 'emergency-plumbing-service',
        title: 'Emergency Plumbing Service',
        description: 'Emergency plumbing services available for urgent situations. We respond quickly to minimize damage.',
        content: `Emergency plumbing services available for urgent situations. We respond quickly to minimize damage.

Plumbing emergencies don't wait for business hours. Sharp Plumbing provides emergency services for urgent situations that require immediate attention.

Common plumbing emergencies we handle:
- Burst pipes
- Major leaks
- Sewer backups
- No hot water
- Overflowing toilets
- Gas leaks
- Frozen pipes

When disaster strikes, call Sharp Plumbing for emergency plumbing service.`,
        metaDescription: 'Emergency plumbing service in Independence, MO. Sharp Plumbing responds quickly to urgent situations. Call (816) 207-3561.',
      },
      {
        slug: 'kitchen-plumbing',
        title: 'Kitchen Plumbing',
        description: 'Complete kitchen plumbing services including sinks, faucets, disposals, and dishwashers.',
        content: `Complete kitchen plumbing services including sinks, faucets, disposals, and dishwashers.

The kitchen is the heart of your home, and proper plumbing is essential. Our team handles all aspects of kitchen plumbing, from minor repairs to complete remodels.

Our kitchen plumbing services include:
- Sink installation and repair
- Faucet installation and repair
- Garbage disposal services
- Dishwasher hookup
- Ice maker lines
- Instant hot water dispensers
- Remodel plumbing

Upgrade your kitchen - call Sharp Plumbing for kitchen plumbing services.`,
        metaDescription: 'Kitchen plumbing in Independence, MO. Sharp Plumbing handles sinks, faucets, disposals, and more. Call (816) 207-3561.',
      },
      {
        slug: 'plumbing-inspection',
        title: 'Plumbing Inspection',
        description: 'Comprehensive plumbing inspections for home buyers, sellers, and preventive maintenance.',
        content: `Comprehensive plumbing inspections for home buyers, sellers, and preventive maintenance.

A thorough plumbing inspection can identify problems before they become expensive repairs. Our detailed inspections give you a complete picture of your plumbing system's condition.

Our plumbing inspections include:
- Water supply system inspection
- Drain system evaluation
- Water heater assessment
- Fixture condition check
- Leak detection
- Code compliance review
- Written inspection report

Know your plumbing - call Sharp Plumbing for a comprehensive inspection.`,
        metaDescription: 'Plumbing inspection in Independence, MO. Sharp Plumbing provides detailed inspections. Call (816) 207-3561.',
      },
    ],
  },
  {
    slug: 'water-heater-and-treatment-services',
    title: 'Water Heater and Treatment Services',
    description: 'Our plumbers provide comprehensive water heater and treatment services to ensure you have access to clean, hot water whenever you need it. We offer installation, repair, and maintenance for all types of water heaters, including tankless models. Our water treatment solutions address issues like hard water, contaminants, and unpleasant tastes or odors.',
    content: `Our plumbers provide comprehensive water heater and treatment services to ensure you have access to clean, hot water whenever you need it. We offer installation, repair, and maintenance for all types of water heaters, including tankless models. Our water treatment solutions address issues like hard water, contaminants, and unpleasant tastes or odors.

Clean, hot water is essential for daily life. Sharp Plumbing provides complete water heater and treatment services to ensure your water is safe, clean, and available when you need it.

Our water heater and treatment services include:
- Tankless water heater installation
- Tankless water heater repair
- Tankless water heater maintenance
- Water filtration system installation
- Water treatment services
- Water softener installation

Trust Sharp Plumbing for all your water heater and treatment needs.`,
    metaDescription: 'Water heater and treatment services in Independence, MO. Sharp Plumbing installs and repairs all types. Call (816) 207-3561.',
    services: [
      {
        slug: 'tankless-water-heater-installation',
        title: 'Tankless Water Heater Installation',
        description: 'Professional tankless water heater installation for endless hot water and energy savings.',
        content: `Professional tankless water heater installation for endless hot water and energy savings.

Tankless water heaters provide hot water on demand while saving energy. Our technicians install all major brands and models, ensuring proper sizing and installation for optimal performance.

Our tankless installation includes:
- System sizing
- Gas or electric hookup
- Venting installation (if required)
- Water line connections
- System programming
- Operation training
- Warranty on all work

Enjoy endless hot water - call Sharp Plumbing for tankless water heater installation.`,
        metaDescription: 'Tankless water heater installation in Independence, MO. Sharp Plumbing provides professional installation. Call (816) 207-3561.',
      },
      {
        slug: 'tankless-water-heater-repair',
        title: 'Tankless Water Heater Repair',
        description: 'Expert tankless water heater repair services for all makes and models.',
        content: `Expert tankless water heater repair services for all makes and models.

Tankless water heaters require specialized knowledge for proper diagnosis and repair. Our technicians are trained to work on all major brands and can quickly restore your hot water.

Common tankless repairs we handle:
- No hot water
- Temperature fluctuations
- Error codes
- Ignition problems
- Flow issues
- Scale buildup
- Venting problems

Restore your hot water - call Sharp Plumbing for tankless water heater repair.`,
        metaDescription: 'Tankless water heater repair in Independence, MO. Sharp Plumbing fixes all brands. Call (816) 207-3561.',
      },
      {
        slug: 'tankless-water-heater-services',
        title: 'Tankless Water Heater Services',
        description: 'Complete tankless water heater services including maintenance, flushing, and tune-ups.',
        content: `Complete tankless water heater services including maintenance, flushing, and tune-ups.

Regular maintenance is essential for tankless water heater performance and longevity. Our maintenance services keep your system running efficiently and help prevent costly repairs.

Our tankless services include:
- Annual maintenance
- System flushing
- Filter cleaning
- Component inspection
- Efficiency optimization
- Scale prevention
- Performance testing

Maintain peak performance - call Sharp Plumbing for tankless water heater services.`,
        metaDescription: 'Tankless water heater services in Independence, MO. Sharp Plumbing provides maintenance and flushing. Call (816) 207-3561.',
      },
      {
        slug: 'water-filtration-system-installation',
        title: 'Water Filtration System Installation',
        description: 'Professional water filtration system installation for clean, great-tasting water throughout your home.',
        content: `Professional water filtration system installation for clean, great-tasting water throughout your home.

Clean water is essential for health and comfort. Our technicians install whole-house and point-of-use filtration systems to address a variety of water quality concerns.

Our water filtration services include:
- Whole-house filtration
- Under-sink filters
- Reverse osmosis systems
- Sediment filtration
- Carbon filtration
- UV disinfection
- Filter replacement

Enjoy clean water - call Sharp Plumbing for water filtration system installation.`,
        metaDescription: 'Water filtration system installation in Independence, MO. Sharp Plumbing provides clean water solutions. Call (816) 207-3561.',
      },
      {
        slug: 'water-treatment-services',
        title: 'Water Treatment Services',
        description: 'Comprehensive water treatment services to address hard water, contaminants, and water quality issues.',
        content: `Comprehensive water treatment services to address hard water, contaminants, and water quality issues.

Water quality affects your health, your home, and your appliances. Our water treatment experts can analyze your water and recommend solutions for your specific needs.

Our water treatment services include:
- Water testing
- Water softener installation
- Iron removal systems
- pH correction
- Chlorine removal
- Contaminant filtration
- Maintenance and service

Improve your water quality - call Sharp Plumbing for water treatment services.`,
        metaDescription: 'Water treatment services in Independence, MO. Sharp Plumbing addresses all water quality issues. Call (816) 207-3561.',
      },
    ],
  },
  {
    slug: 'water-heater-services',
    title: 'Water Heater Services',
    description: 'Sharp Plumbing offers professional water heater installation, repair, and maintenance services. Our experienced technicians work with all types and brands of water heaters to ensure your home has reliable hot water. We provide efficient solutions that save energy and extend the life of your equipment.',
    content: `Sharp Plumbing offers professional water heater installation, repair, and maintenance services. Our experienced technicians work with all types and brands of water heaters to ensure your home has reliable hot water. We provide efficient solutions that save energy and extend the life of your equipment.

Hot water is essential for daily life, and a properly functioning water heater is crucial. Our team handles all aspects of water heater service to keep your hot water flowing.

Our water heater services include:
- Water heater installation
- Water heater repair
- Maintenance and tune-ups
- Tank replacement
- Anode rod replacement
- Efficiency upgrades

Trust Sharp Plumbing for all your water heater service needs in Independence, MO.`,
    metaDescription: 'Water heater services in Independence, MO. Sharp Plumbing provides installation, repair, and maintenance. Call (816) 207-3561.',
    services: [
      {
        slug: 'water-heater-installation',
        title: 'Water Heater Installation',
        description: 'Professional water heater installation services for tank and tankless systems.',
        content: `Professional water heater installation services for tank and tankless systems.

When it's time for a new water heater, Sharp Plumbing provides expert installation. We help you select the right size and type of water heater for your home, then install it properly for reliable performance.

Our water heater installation includes:
- System sizing
- Energy-efficient options
- Removal of old unit
- Proper connections
- Safety valve installation
- Code compliance
- Warranty on all work

Get reliable hot water - call Sharp Plumbing for water heater installation.`,
        metaDescription: 'Water heater installation in Independence, MO. Sharp Plumbing installs all types professionally. Call (816) 207-3561.',
      },
      {
        slug: 'water-heater-repair',
        title: 'Water Heater Repair',
        description: 'Expert water heater repair services to restore your hot water quickly.',
        content: `Expert water heater repair services to restore your hot water quickly.

When your water heater fails, you need fast, reliable repair service. Our experienced technicians diagnose and fix all types of water heater problems to restore your hot water.

Common water heater repairs we handle:
- No hot water
- Insufficient hot water
- Leaking tanks
- Strange noises
- Pilot light problems
- Thermostat issues
- Anode rod replacement
- Valve problems

Restore your hot water - call Sharp Plumbing for water heater repair.`,
        metaDescription: 'Water heater repair in Independence, MO. Sharp Plumbing provides fast, reliable repairs. Call (816) 207-3561.',
      },
    ],
  },
]

// Helper function to get all services flat
export function getAllServices(): Array<{ category: ServiceCategory; service: Service }> {
  const allServices: Array<{ category: ServiceCategory; service: Service }> = []
  
  for (const category of serviceCategories) {
    for (const service of category.services) {
      allServices.push({ category, service })
    }
  }
  
  return allServices
}

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find(cat => cat.slug === slug)
}

// Helper function to get service by slugs
export function getServiceBySlugs(categorySlug: string, serviceSlug: string): { category: ServiceCategory; service: Service } | undefined {
  const category = getCategoryBySlug(categorySlug)
  if (!category) return undefined
  
  const service = category.services.find(s => s.slug === serviceSlug)
  if (!service) return undefined
  
  return { category, service }
}

