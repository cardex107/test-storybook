export const enum GenderIdentity {
    male = 'male',
    female = 'female',
    nonBinary = 'non_binary',
    transgender = 'transgender',
    preferNotToSay = 'prefer_not_to_say',
}
export const enum CustomerProductServiceAvailability {
    included = 'included',
    ppu = 'ppu',
}

export const enum ConsultationStatus {
    pending = 'pending',
    inProgress = 'in-progress',
    canceled = 'canceled',
    done = 'done',
    excluded = 'excluded',
    uncompleted = 'uncompleted',
    requested = 'requested',
    closed = 'closed',
    suspended = 'suspended',
}

export const enum ConsultationServiceType {
    omc = 'omc',
    emo = 'emo',
    gfp = 'gfp',
    sc = 'sc',
    dermaAI = 'dermatology_ai',
    wellbeingExercises = 'wellbeing_exercises',
}

export const enum ConsultationChannel {
    online = 'online',
    chat = 'chat',
    phone = 'phone',
    video = 'video',
    videoASAP = 'video-asap',
    phoneScheduled = 'phone-scheduled',
}

export const enum GFPStatus {
    pending = 'pending',
    inProgress = 'in-progress',
    done = 'done',
    finish = 'finish',
    canceled = 'canceled',
}

export const enum VerificationStatus {
    accepted = 'accepted',
    rejected = 'rejected',
    pending = 'pending',
    notStarted = 'not_started',
    notStartedWithUrl = 'not_started_with_url',
    notStartedWithoutUrl = 'not_started_without_url',
}

export const enum InvitationStatus {
    canceled = 'canceled',
    sent = 'sent',
    created = 'created',
    validated = 'validated',
}
