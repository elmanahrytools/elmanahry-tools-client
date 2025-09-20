export const categories = [
  {
    id: 1,
    name: "معدات كهربائية",
    href: "/categories/electrical-equipment", // Optional href for parent
    children: [
      {
        id: 11,
        name: "مثاقب (Drills)",
        href: "/categories/drills",
        children: [
          {
            id: 111,
            name: "مثاقب لاسلكية",
            href: "/categories/cordless-drills",
            children: [
              {
                id: 1111,
                name: "احترافية",
                href: "/categories/professional-cordless",
                
              },
              { id: 1112, name: "منزلية", href: "/categories/home-cordless" },
            ],
          },
          {
            id: 112,
            name: "مثاقب سلكية",
            href: "/categories/corded-drills",
            children: [
              { id: 1121, name: "خفيفة", href: "/categories/light-corded" },
              { id: 1122, name: "ثقيلة", href: "/categories/heavy-corded" },
            ],
          },
        ],
      },
      {
        id: 12,
        name: "مناشير",
        href: "/categories/saws",
        children: [
          {
            id: 121,
            name: "مناشير يدوية كهربائية",
            href: "/categories/hand-electric-saws",
            children: [
              { id: 1211, name: "خشب", href: "/categories/wood-saws" },
              { id: 1212, name: "معدن", href: "/categories/metal-saws" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "معدات يدوية",
    href: "/categories/hand-tools",
    children: [
      {
        id: 21,
        name: "شواكيش",
        href: "/categories/hammers",
        children: [
          {
            id: 211,
            name: "شواكيش صغيرة",
            href: "/categories/small-hammers",
            children: [
              {
                id: 2111,
                name: "نجارة",
                href: "/categories/carpentry-hammers",
              },
              { id: 2112, name: "معادن", href: "/categories/metal-hammers" },
            ],
          },
          {
            id: 212,
            name: "شواكيش كبيرة",
            href: "/categories/large-hammers",
          },
        ],
      },
      {
        id: 22,
        name: "مفاتيح",
        href: "/categories/wrenches",
        children: [
          {
            id: 221,
            name: "مفاتيح عزم",
            href: "/categories/torque-wrenches",
          },
          {
            id: 222,
            name: "مفاتيح ربط",
            href: "/categories/socket-wrenches",
            children: [
              {
                id: 2221,
                name: "قياسية",
                href: "/categories/standard-sockets",
              },
              { id: 2222, name: "مترية", href: "/categories/metric-sockets" },
            ],
          },
        ],
      },
    ],
  },
];
