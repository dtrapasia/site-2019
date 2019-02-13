/* eslint global-require: 0 */

const mentors = [
  {
    name: 'Rohan Mathur',
    image: require('assets/Mentors/mathur.png'),
    description:
      'LineageOS is an open-source operating system for smartphones, ' +
      'tablets and set-top boxes, based on the Android operating system. It supports ' +
      'over 100 devices, and contains several enhancements not found in stock Android, ' +
      'such as customized UI elements, privacy enhancements, and more.',
    github: 'mathur',
  },
  {
    name: 'Michael Tamillow',
    image: '',
    description: '',
    github: 'mtamillow',
  },
  {
    name: 'Zac Codiamat',
    image: '',
    description: '',
    github: '',
  },
  {
    name: 'Amber Sahdev',
    image: '',
    description: 'Flight on-time reliability search engine',
    github: '',
  },
  {
    name: 'Shelby Switzer',
    image: '',
    description: '',
    github: 'switzersc',
  },
  {
    name: 'Jonathan Helmus',
    image: require('assets/Mentors/jjhelmus.jpeg'),
    description:
      'Conda is an open source package management system and environment management system that runs on Windows, macOS and Linux. Conda quickly installs, runs and updates packages and their dependencies. Conda easily creates, saves, loads and switches between environments on your local computer. It was created for Python programs, but it can package and distribute software for any language.',
    github: 'jjhelmus',
  },
  {
    name: 'Tom Fischer',
    image: '',
    description: '',
    github: '',
  },
  {
    name: 'Ish Shah',
    image: '',
    description: 'Tool for managing configuration files',
    github: '',
  },
  {
    name: 'Drake Eidukas',
    image: '',
    description: '',
    github: '',
  },
  {
    name: 'Paul Ganssle',
    image: '',
    description: '',
    github: 'pganssle',
  },
  {
    name: 'Evan Hazlett',
    image: '',
    description: '',
    github: 'ehazlett',
  },
  {
    name: 'Michael Crosby',
    image: '',
    description: '',
    github: 'crosbymichael',
  },
  {
    name: 'Phil Mesnier',
    image: require('assets/Mentors/pmesnier.png'),
    description:
      'Blockchain event notifier service. Help build a new plugin module and some representative front-end usage examples.',
    github: 'pmesnier',
  },
  {
    name: 'Douglas Wilson',
    image: require('assets/Mentors/dougwilson.jpeg'),
    description: 'Express.js is a HTTP server framework for Node.js',
    github: 'dougwilson',
  },
  {
    name: 'David Dias',
    image: '',
    description: '',
    github: 'thedaviddias',
  },
  {
    name: 'Tony Crisci',
    image: '',
    description: '',
    github: 'acrisci',
  },
  {
    name: 'Brett Koonce',
    image: '',
    description: '',
    github: 'asparagui',
  },
  {
    name: 'Lewis McGibbney',
    image: '',
    description: '',
    github: '',
  },
  {
    name: 'Zac Delventhal',
    image: '',
    description: '',
    github: '',
  },
  {
    name: 'Matt Mariutto',
    image: '',
    description: '',
    github: '',
  },
  {
    name: 'Rob Miroballi',
    image: '',
    description: '',
    github: '',
  },
  {
    name: 'Katharine Hyatt',
    image: '',
    description: '',
    github: 'kshyatt',
  },
  {
    name: 'Shaoyu',
    image: '',
    description: '',
    github: '',
  },
  {
    name: 'Cody Sherman',
    image: '',
    description: '',
    github: '',
  },
  {
    name: 'Richard Kim',
    image: '',
    description: '',
    github: '',
  },
  {
    name: 'Johnmark Beaty',
    image: '',
    description: '',
    github: '',
  },
  {
    name: 'Sam Moore',
    image: '',
    description: '',
    github: '',
  },
  {
    name: 'Brandon Frisch',
    image: '',
    description: '',
    github: '',
  },
  {
    name: 'Brian Jesse',
    image: require('assets/Mentors/BrainBacon.jpeg'),
    description: '3D Graphics plugin for Vue.js in the browser',
    github: 'BrainBacon',
  },
  {
    name: 'Benjamin Coe',
    image: '',
    description: '',
    github: 'bcoe',
  },
  {
    name: 'Frederic Harper',
    image: '',
    description:
      'npm is the open source package manager that help JavaScript developers easily share packaged modules of code. Behind is the the npm Registry, a public collection of packages of open-source code for Node.js, front-end web apps, mobile apps, robots, and countless other. npm is also the command line interface client that allows developers to install and publish those packages.',
    github: '',
  },
  {
    name: 'Tyler Leonhardt',
    image: '',
    description:
      "PowerShell Core is an object-oriented command-line shell and scripting language built on .NET. PowerShell helps system administrators and power-users rapidly automate tasks that manage operating systems (Linux, macOS, and Windows) and processes.\nPowerShell is designed to improve the command-line and scripting environment by putting discoverability, consistency, and objects first.\n\nOh, and it's open source and free.",
    github: 'tylerl0706',
  },
  {
    name: 'Andrew Schwartzmeyer',
    image: require('assets/Mentors/andschwa.jpeg'),
    description:
      'Open Enclave is an SDK for building enclave applications in C and C++. An enclave application partitions itself into two components (1) An untrusted component (called the host) and (2) A trusted component (called the enclave). An enclave is a secure container whose memory is protected from entities outside the enclave. These protections allow enclaves to perform secure computations with assurances that secrets will not be compromised.',
    github: 'andschwa',
  },
  {
    name: 'Akash Gupta',
    image: '',
    description:
      'OpenEnclave is an C/C++ SDK for writing enclave applications. Enclave applications are segmented into a trusted "enclave" portion and an untrusted "host" portion. The memory in the enclave portion is protected from the outside world through the use of processor specific isolation technology like Intel SGX or ARM TrustZone. This ensures that contents in the enclave are secure even if the host is compromised.',
    github: '',
  },
  {
    name: 'Robert Holt',
    image: '',
    description: '',
    github: 'rjmholt',
  },
  {
    name: 'Matthew Turk',
    image: require('assets/Mentors/MatthewTurk.jpeg'),
    description:
      'Analyze and visualize data from lots of different sources -- astronomy, brain scans, materials science, and so on!',
    github: 'MatthewTurk',
  },
  {
    name: 'Timothy Bretl',
    image: '',
    description: '',
    github: 'tbretl',
  },
  {
    name: 'Matthew West',
    image: '',
    description: '',
    github: 'mwest1066',
  },
  {
    name: 'Nathan Walters',
    image: '',
    description: '',
    github: 'nwalters512',
  },
  {
    name: 'David Mussulman',
    image: '',
    description: '',
    github: 'trombonekenny',
  },
  {
    name: 'Genna Hensel',
    image: '',
    description: '',
    github: '',
  },
  {
    name: 'Alex Chrichton',
    image: require('assets/Mentors/alexcrichton.jpeg'),
    description:
      "Rust is a new blazingly fast and safe programming language and WebAssembly is a new blazingly fast and safe VM for the web, a perfect match! The Rust and WebAssembly Working Group is working to make Rust and WebAssembly a dream come true, and we're always looking for more to help out!",
    github: 'alexcrichton',
  },
  {
    name: 'Trent Spice',
    image: require('assets/Mentors/trentspi.jpeg'),
    description: '',
    github: 'trentspi',
  },
  {
    name: 'Brock Mendel',
    image: '',
    description: '',
    github: 'ChadFulton',
  },
  {
    name: 'Pablo Aguiar',
    image: '',
    description: '',
    github: 'socrphus',
  },
  {
    name: 'Vladyslav Shcherbyna',
    image: require('assets/Mentors/valdislav.jpeg'),
    description:
      'Development environment for magento2 development aimed to make close to production environment. Current DevBox aims to support multi-service deployment in one click. It is optimized for development scenarios using local environment.',
    github: 'valdislav',
  },
  {
    name: 'Divya Sasidharan',
    image: '',
    description: '',
    github: 'shortdiv',
  },
  {
    name: 'Pranay Prakash',
    image: '',
    description: '',
    github: 'pranaygp',
  },
  {
    name: 'Andrew Faust',
    image: '',
    description: '',
    github: '',
  },
  {
    name: 'Jason Coombs',
    image: require('assets/Mentors/jaraco.jpeg'),
    description:
      'importlib_metadata is the draft project slated to become importlib.metadata in Python 3.8',
    github: 'jaraco',
  },
  {
    name: 'Tejas Kumar',
    image: '',
    description: '',
    github: '',
  },
];

export default mentors;
