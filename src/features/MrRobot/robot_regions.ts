export type Region = {
  class_name: string;
  class_uuid: string;
  color: string;
  h: number;
  w: number;
  x: number;
  y: number;
};

const regions: Region[] = [
  {
    class_name: "Head",
    class_uuid: "a14a2e4a-071d-4125-bc96-6dc6b8e5de56",
    color: "rgba(17, 187, 89, 0.5)",
    h: 0.10601872608415396,
    w: 0.13799534185469722,
    x: 0.4291600009877838,
    y: 0.0581043586467146,
  },
  {
    class_name: "Right Eye",
    class_uuid: "af423b0e-9518-4e09-b06c-10e5a2152b4a",
    color: "rgba(108, 165, 197, 0.5)",
    h: 0.021374743162127792,
    w: 0.028511434267499223,
    x: 0.4599523499966833,
    y: 0.09572390661205958,
  },
  {
    class_name: "Left Eye",
    class_uuid: "a89f3a9b-bda0-45b5-8441-4b3c7cbedc45",
    color: "rgba(108, 255, 236, 0.5)",
    h: 0.023084722615098033,
    w: 0.03193280637959924,
    x: 0.5044301874539823,
    y: 0.09572390661205958,
  },
  {
    class_name: "Power Core",
    class_uuid: "feb48396-6eac-4850-ab25-4a2bbeb52f16",
    color: "rgba(17, 187, 89, 0.5)",
    h: 0.0803690342896006,
    w: 0.15054037293239694,
    x: 0.424598171504984,
    y: 0.2111475196875498,
  },
  {
    class_name: "Left Arm Joint",
    class_uuid: "4b1a6bca-6d71-4312-9cee-2fc203105300",
    color: "rgba(154, 187, 17, 0.5)",
    h: 0.08036903428960056,
    w: 0.10606253547509778,
    x: 0.5842622034029804,
    y: 0.17352797172220485,
  },
  {
    class_name: "Left Knee Joint",
    class_uuid: "ea5dd070-a1aa-469b-ba39-010c9c74e93f",
    color: "rgba(17, 165, 187, 0.5)",
    h: 0.08302848207812316,
    w: 0.11387893053875216,
    x: 0.3677364229704261,
    y: 0.6190548228810876,
  },
  {
    class_name: "Right Knee Joint",
    class_uuid: "eae2e532-02c6-4086-81e8-fd25dd441cec",
    color: "rgba(187, 68, 17, 0.5)",
    h: 0.08209030713938743,
    w: 0.12451597350116289,
    x: 0.5260410535624804,
    y: 0.6195239103504556,
  },
  {
    class_name: "Right Arm Joint",
    class_uuid: "33502690-52c5-4924-a490-41d996f2845e",
    color: "rgba(161, 17, 187, 0.5)",
    h: 0.07206300064588603,
    w: 0.12119945412257802,
    x: 0.32434259430445467,
    y: 0.18458398675011448,
  },
];
export default regions;
