export interface Client {
  titleId: number;
  firstName: string;
  surname: string;
  employmentStatus: string;
  genderId: number;
  nationalIdNumber: string;
  occupation: string;
  dateOfBirth: string;
  contactDetails: {
    contactPhoneNumber: string;
    contactTelephone: string;
    communicationId: number;
    email: string;
    createAddressCommand: {
      residenceNumber: string;
      suburb: string;
      cityId: number;
    };
  };
  employerDetails: {
    employerName: string;
    employerEmail: string;
    employerPhone: string;
    employerTelephone: string;
    createAddressCommand: {
      residenceNumber: string;
      suburb: string;
      cityId: number;
    };
  };
  bankingDetails: {
    accountNumber: string;
    accountHolderName: string;
    currencyId: number;
    bankBranchId: number;
  };
  documentFiles: {
    fileName: string;
    filePath: string;
  }[];
}
