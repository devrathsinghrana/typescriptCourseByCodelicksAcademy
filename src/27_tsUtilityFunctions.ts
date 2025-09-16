// Partial
// This is a ts property which makes all the object properties optional
type SchoolInfo = {
  schoolName: string;
  schoolLocation: string;
  schoolStrength: number;
};

type SchoolInfoOptional = Partial<SchoolInfo>;

const schoolInfo: SchoolInfo = {
  schoolName: "Yello",
  schoolLocation: "Gurugram",
  schoolStrength: 23,
};
const schoolInfoOptional: SchoolInfoOptional = {};

// Required
// This is a ts in-built utility which makes all optional properties of object type required
type MeraGhar = {
  gharKaNaam?: string;
  gharKaPata: string;
  gharKeLoog?: number;
};

type MeraGharJaruri = Required<MeraGhar>;
const meraGhar: MeraGhar = { gharKaPata: "Lokhandwala" };
const meraGharJaruri: MeraGharJaruri = {
  gharKaNaam: "Alishan",
  gharKaPata: "Lokhandwala",
  gharKeLoog: 85,
};

// Pick
// This is ts in-built utility which makes new object type from existing one containing only passed or picked properties type
type PickNaamFromGhar = Pick<MeraGharJaruri, "gharKaNaam" | "gharKaPata">;
type PickNaamFromGharInter = Pick<MeraGharJaruri, "gharKaNaam" & "gharKaPata">; //not valid gives empty object type
type PickNaamFromGharKaccha = Pick<MeraGhar, "gharKaNaam" | "gharKaPata">;

// Omit
// This is an in-built ts utility which removes passed properties from existing object
type MeraGharKaNaamNhiJaruri = Omit<MeraGharJaruri, "gharKaNaam">;
