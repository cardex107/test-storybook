import { RadioInputProps } from '../user/shared/components/form/RadioInput';
import { ConsultationChannel, ConsultationServiceType, ConsultationStatus, GenderIdentity } from './enums';

export type Map<T> = {
    [key: string]: T;
};

export type Setting = {
    key: string;
    value: boolean | number | string;
};

export type ProjectService = {
    channelTypes: ConsultationChannel[];
    version: string;
    specialities: string[];
    minutes_before_access?: number;
    minutes_after_access?: number;
};

export type ProjectConsent = {
    document_type: string;
};

export type ConsultationConsent = {
    document_type: string;
    url: string;
    accepted: boolean;
};

export type Consents = ProjectConsent[];

export type ConsentsData = {
    client_id: string | null;
    consents: { document_type: string; url: string | null }[];
};

export type ConsentsWithGuid = {
    consultation_guid: string;
    consents: { document_type: string; url: string; accepted: boolean }[];
};

export type Mode = 'write' | 'read' | 'none';

export type ScheduleSettings = Array<Record<string, any>>;

export type Project = {
    id: number;
    name: string;
    company: string;
    country: string;
    default_language: string;
    time_zone: string;
    contact_phone: string;
    contact_home_email: string;
    contact_support_email: string;
    use_contact_form: boolean;
    password_requirements: string;
    minor_dependents_max_age: number;
    allow_saving_dependents: boolean;
    allow_use_dependents: boolean;
    postal_data_required: boolean;
    share_medical_data: string;
    services: Record<string, ProjectService>;
    languages: string[];
    locales: Locale[];
    contentLocales: string[];
    serviceLocales: string[];
    defaultServiceLocale: string;
    defaultContentLocale: string;
    alternativeLocales: string[];
    alternative_preferred_languages: string[];
    auth_use_sso: boolean;
    allow_create_clients: boolean;
    allow_remove_clients: boolean;
    allow_update_clients: boolean;
    allow_commercial_communications: boolean;
    use_beneficiaries: Mode;
    use_dependents: Mode;
    use_gender_identity: boolean;
    profile: {
        available: string[];
        editable: string[];
    };
    csp_rules: Record<string, string[]>;
    enable_activation_sign_up_step: boolean;
    use_exclusion_warning_text: boolean;
    use_emergency_contacts: Mode;
    use_gp_details: Mode;
    verification_provider: string;
    identity_provider: string;
    identity_configuration: IdentityConfiguration;
    lam_ddi: string;
    consent_provider: string;
    consents: ProjectConsent[];
    consultation_consents?: ConsultationConsent[];
    consultation_consent_provider: string;
    minimum_password_age: number;
    num_passwords_in_history: number;
    show_dependent_code_field: boolean;
    other_languages?: boolean;
    slug: string;
    use_2fa: string;
    show_banner_medical_data: boolean;
    allowed_country_phone_codes: string[];
    validate_phone_formats: boolean;
    validation_types_required?: string;
    use_recaptcha: boolean;
    use_legal_notice: boolean;
    force_double_confirmation: boolean;
    auth_external_url: string;
    lock_auth_in_user_interface: boolean;
    recommend_sc_before_consultation: string;
    settings_ios_vsee_app: string;
    settings_android_vsee_app: string;
    consultation_consents_provider: string;
    gfp_client_can_select_start_date: boolean;
    gfp_client_can_fillin_questionnaire: boolean;
    schedule_settings: {
        default: ScheduleSettings;
        by_specialty: Record<string, ScheduleSettings>;
    };
    resources: {
        logos: Record<string, string | null>;
        colors: {
            brand_color_1: string;
            brand_color_2: string;
            text_color: string;
            background_color: string;
            iframe_service_card_background_color: string;
            iframe_background_color: string;
            email_primary_brand_color: string;
            email_secondary_brand_color: string;
        };
        images: Record<string, string>;
    };
    navigation_restricted: boolean;
    content_restricted_by_product: boolean;
    use_cookie_pro: boolean;
    google_tag_manager: boolean;
    use_faqs: boolean;
    gtm_datalayer_name: string;
    robots: boolean;
    mixpanel_project_token: string;
    show_account_menu: boolean;
    platforms: {
        has_site: boolean;
        has_app: boolean;
        has_api: boolean;
    };
    restrict_navigation_consultation_flow_pages_only: boolean;
    portal_template: string;
};

export type IdentityConfiguration = Record<string, boolean>;

export type ClientConsent = { document_type: string; accepted: boolean; url: string };

export type Client = {
    id: string;
    name: string;
    surname: string;
    surname2: string;
    gender: string;
    birth_date: string;
    age: number;
    country: string;
    language: string;
    locale: string;
    email: string;
    phone_prefix: string;
    phone: string;
    time_zone: string;
    document_id: string;
    client_code: string;
    project_id: number;
    group: string;
    is_owner: boolean;
    identity_verified: boolean;
    has_postal_data: boolean;
    has_emergency_contacts: boolean;
    has_gp_details: boolean;
    has_medical_data: boolean;
    commercial_communications?: boolean | null;
    gender_identity?: GenderIdentity;
    use_emergency_contacts?: boolean;
    use_gp_details?: boolean;
    consents: ClientConsent[];
    product_code: string | null;
    metadata: Record<string, string> | null;
    height?: string;
    weight?: string;
};

export type Dependent = {
    activated: boolean;
    age: number;
    birth_date: string;
    client_id: string;
    country: string;
    dependent_code: string;
    document_id: string;
    email: string;
    gender: string;
    height: string;
    id: string;
    language: string;
    locale: string;
    name: string;
    phone: string;
    phone_prefix: string;
    project_id: number;
    relation_type: string;
    surname: string;
    time_zone: string;
    weight: string;
};

export type MedicalHistory = {
    date: string | null;
    height: string;
    weight: string;
    medication: boolean | null;
    medication_description: string;
    medicine_allergy: boolean | null;
    medicine_allergy_description: string;
    food_allergy: boolean | null;
    food_allergy_description: string;
    smoke: boolean | null;
    smoke_frequency: string;
    smoke_from: string;
    smoke_give_up_intention: boolean | null;
    exercise: boolean | null;
    exercise_description: string;
    drink: boolean | null;
    drink_frequency: string;
    diseases: string;
    parents_diseases: string;
};

export type Country = {
    phone_code: string;
    value: string;
    key: string;
    phone_format: string;
    enabled: boolean;
};

export type Capacity = {
    editable: boolean;
    limit_reached: boolean;
    max: number;
    used: number;
    visible: boolean;
};

export type CustomerProductService = {
    service: string;
    name: string;
    availability: CustomerProductServiceAvailability;
    limit_reached: boolean;
    version: string;
    rules: string[];
};

export type ProductScope = {
    reference: string;
};

export type CustomerProduct = {
    reference: string;
    name: string;
    services: CustomerProductService[];
    related_services: any[];
    therapies: any[];
    beneficiaries: Capacity;
    dependents: Capacity;
    call_in: Capacity;
    scopes: ProductScope[];
};

export interface ModalForm {
    onSubmodalOpen?: () => void;
    onSubmodalClose?: () => void;
}

export type CustomerPostalData = {
    address_line_1: string;
    address_line_2: string;
    town: string;
    county: string;
    post_code: string;
    country: string;
};

export type Phone = {
    prefix: string;
    phone: string;
};

export type GeneralPractitioner = {
    name: string;
    address_line_1: string;
    address_line_2: string;
    town: string;
    county: string;
    post_code: string;
    country: string;
    phone: Phone;
};

export type EmergencyContact = {
    id: string | null;
    name: string;
    surname: string;
    phone: Phone;
    phone2: Phone;
    comments: string;
    relation_type: 'husband' | 'wife' | 'domestic_partner' | 'son' | 'daughter' | 'parent' | 'other' | '';
    preference: number;
};

export type Consultation = {
    id: number;
    client_id?: string;
    reference: string;
    project_id: number;
    dependent_id: string | null;
    doctor_id: number | null;
    doctor?: Doctor;
    doctor_answer?: string;
    status: ConsultationStatus;
    language: string;
    service_type: ConsultationServiceType;
    specialty?: string;
    specialty_type?: string;
    date: string;
    time: string;
    dateWithoutTime: string;
    time_zone: string;
    country: string;
    done_date: string | null;
    reason: string;
    channel: ConsultationChannel;
    service_version: string;
    service_availability: string;
    patient: ConsultationPatient;
    patient_files: any[];
    doctor_files: any[];
    data_sharing?: boolean;
    other_languages?: string;
    therapy?: Therapy;
    consultation?: string;
    call_reason?: string;
    guid?: string;
    consents?: ConsultationConsent[];
    program?: string;
    events?: GFPEvent[];
    currentFollowUp?: GFPFollowUp;
    locale: string;
    alternative_locale: string;
    metadata?: ConsultationMetadata;
    recommended_services?: string[];
    os?: string;
    user_agent?: string;
    browser?: string;
    device?: string;
    program_options?: string;
    questions?: Record<string, string>;
};

export type GFPConsultation = Consultation & {
    program_options: string[];
    init_date: string[];
};

export type YesNo = 0 | 1;

export type ConsultationMetadata = {
    shareMedicalData?: YesNo;
    [key: string]: any;
};

export type ConsultationPatient = {
    id: string;
    name: string;
    surname: string;
    surname2: string;
    birth_date: string;
    gender: string;
    phone_prefix: string;
    phone: string;
    age: number;
    pathologies: string | null;
    height: string;
    weight: string;
    email?: string;
    document_id?: string;
    relation_type?: string;
};

export type Therapy = {
    reference: string;
};

export type Doctor = {
    id: number;
    name: string;
    surname: string;
    surname2: string;
    specialty: string;
    photo: string;
    referee_number: string;
};

export type GFPEvent = {
    attachments: any[] | null;
    followup: GFPFollowUp;
    id: number;
    sent_date: string;
    status: GFPStatus;
    to_send_date: string;
    type: string;
    week_number: number;
};

export type GFPFollowUp = {
    type?: string;
    status?: GFPStatus;
    comments: string;
    diet_eval: any;
    exercise_eval: any;
    feel_eval: any;
    program_eval: any;
    weight: any;
    weight_eval: any;
};

export type Service = {
    serviceType: ConsultationServiceType;
    channel: ConsultationChannel;
    specialty: string;
    version?: string;
};

export type RescheduleVideocallParams = {
    projectId: number;
    consultationId: number;
    timezone: string;
    date: Date;
};

export type VerificationResponse = {
    status: VerificationStatus;
    url?: string;
};

export type LoginData = {
    email: string;
    password: string;
};

export type User = {
    id: string;
    name: string;
    surname: string;
    surname2: string;
    gender: string;
    birth_date: string;
    locale: string;
    email: string;
    is_owner: boolean;
    commercial_communications: boolean;
    consents: ClientConsent[];
};

export type LegitDermaAIMessage = {
    id: string;
    message: string;
};

type BaseQuestion = {
    name: string;
    label: string;
    version: string[];
    optional?: boolean;
    className?: string;
    required?: boolean;
};
export type Question = BaseQuestion &
    (
        | {
              inputType: 'text' | 'textarea' | 'boolean';
          }
        | {
              options: RadioInputProps['options'];
              inputType: 'option';
          }
        | {
              inputTextLabel: string;
              inputType: 'expandedBoolean';
          }
    );

type GFPFollowUpType = 'welcome' | 'start' | 'follow-up' | 'suggestion' | 'reward' | 'documentation' | 'finish';

export type GFPQuestion = Question & {
    version: string[];
    gender?: 'female' | 'male';
    types?: GFPFollowUpType[];
};

export interface ModalWarningProps {
    onClose?: () => void;
    usePathname?: boolean;
}

export type Locale = {
    locale: string;
    iso2: string;
    content: boolean;
    service: boolean;
    alternative: boolean;
    default_content: boolean;
    default_service: boolean;
};

type MenuGroupItem = {
    type: 'link' | 'page' | 'service';
    accessible_only_logged: boolean;
    slug?: string;
    service: string;
    hidden: boolean;
    locales: {
        locale: string;
        name: string;
        link_url: string;
    }[];
};

export type MenuGroup = {
    project_id: number;
    group_id: number;
    order: number;
    items: MenuGroupItem[];
    locales: {
        locale: string;
        name: string;
    }[];
};

export type Menu = MenuGroup[];

export type Faqs = {
    name: string;
    questions: {
        question: string;
        answer: string;
    }[];
}[];

export type VseeData = {
    vsee_user: string;
    vsee_password: string;
};

export interface PersonalData {
    name: string;
    surname: string;
    surname2: string;
    registered_at: string;
}

export interface Beneficiary {
    id: number;
    email: string;
    status: InvitationStatus;
    last_sent_date: string;
    personal_data: PersonalData;
}

export interface Invitation {
    id: number;
    email: string;
    status: string;
    last_sent_date: string;
}

export type BeneficiariesAndInvitations = {
    beneficiaries: Beneficiary[];
    invitations: Invitation[];
};

export type QuickBloxConfiguration = {
    applicationId: number;
    sessionToken: string;
    accountKey: string;
    userId: number;
    password: string;
    endpoints: {
        api: string;
        chat: string;
        muc: string;
        turn?: string;
    };
};

export type SSOAccessToken = {
    identifier: string;
    data: {
        token: string;
        refresh_token: string;
        accept_tos: boolean;
    };
    action_required: {
        profile: {
            data: Record<string, string | null>;
            editable_fields: string[];
            available_fields: string[];
        };
        legal: { accept_tos: boolean } | null;
    };
};

export type AvailableDates = {
    timezone: string;
    available_days: string[];
    doctor_id?: number;
};

export type AvailableHours = {
    interval: number;
    availabilities: { from: string; to: string }[];
    doctor_id?: number;
    availability_guid?: string;
};

export type File = {
    id: string;
    name: string;
    file: string;
};

export type OptionalContentFile = Omit<OriginalType, 'file'> & Partial<Pick<OriginalType, 'file'>>;

export interface ChatConsultation {
    assigned: boolean;
    dialog_ended: boolean;
    dialog_start_date: string;
    dialog_end_date: string;
    last_message_date: string;
    messages_count: number;
    qb_dialog_id: string;
    qb_dialog_jid: string;
    doctor_id: number;
    doctor_name: string;
    doctor_image: string;
    title: string;
    patient_files: OptionalContentFile[];
    call_reason: string;
    specialty: string;
    status: ConsultationStatus;
    provider: string;
    provider_data: Record<string, any>;
}

export interface QuickBloxConsultation extends ChatConsultation {
    provider: 'quickblox';
    qb_dialog_id: string;
    qb_dialog_jid: string;
    provider_data: {
        _id: string;
        xpp_room_id: string;
    };
}

export interface SendBirdConsultation extends ChatConsultation {
    provider: 'quickblox';
    provider_data: {
        name: string;
        channel_url: string;
    };
}

export type Empty = Record<string, never>;

export interface SendBirdCredentials extends ChatCredentials {
    provider: 'sendbird';
    provider_data: {
        application_id: string;
        api_url: string;
        api_token: string;
        user_id: string;
        access_token: string;
        nickname: string;
    };
}

export interface QuickBloxCredentials {
    provider: 'quickblox';
    provider_data: {
        qb_application_id: string;
        qb_session_token: string;
        qb_user_id: string;
        qb_login: string;
        qb_password: string;
        qb_api_endpoint: string;
        qb_chat_endpoint: string;
        qb_muc_endpoint: string;
        qb_turn_server: string;
        qb_system_user_id: string;
        qb_account_key: string;
    };
}

export type ChatCredentials = SendBirdCredentials | QuickBloxCredentials;

export type RequestFlowResponse = {
    has_triage_questionnaire: boolean;
    has_medical_data_restriction: boolean;
};

export type ConsultationCapacities = {
    actions: {
        cancel: boolean;
        reschedule: boolean;
        update_attachments: boolean;
        start: boolean;
    };
    ui: {
        show: {
            reason: boolean;
        };
    };
};
