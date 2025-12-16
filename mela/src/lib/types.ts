// Bismillahirahmanirahim
// Elhamdulillahirabbilalemin
// Es-selatu ve Es-selamu ala Resulina Muhammedin 
// Süphanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah
import { Prisma } from "@prisma/client";

export function getUserDataSelect(loggedInUserId: string) {
  return {
    id: true,
    username: true,
    displayName: true,
    avatarUrl: true,
    bio: true,
    createdAt: true,
  } satisfies Prisma.UserSelect;
}

export type UserData = Prisma.UserGetPayload<{
  select: ReturnType<typeof getUserDataSelect>;
}>;

export function getAgahiInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type AgahiData = Prisma.AgahiGetPayload<{
  include: ReturnType<typeof getAgahiInclude>;
}>;

export interface AgahiPage {
  items: AgahiData[];
  nextCursor: string | null;
}
export function getMealInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type MealData = Prisma.MealGetPayload<{
  include: ReturnType<typeof getMealInclude>;
}>;

export interface MealPage {
  items: MealData[];
  nextCursor: string | null;
}


export function getTefsirInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type TefsirData = Prisma.TefsirGetPayload<{
  include: ReturnType<typeof getTefsirInclude>;
}>;

export interface TefsirPage {
  items: TefsirData[];
  nextCursor: string | null;
}
// Generic include for content models (Agahi, Duyem, Dirok, etc.)
export function getKelamDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

// Generic content type used for lists/pages returned by your APIs.
// Each content model (Agahi, Duyem, Dirok, ...) will conform to this shape at runtime.
export type KelamData = {
  user: UserData;
  attachments: Array<any>;
  // other fields (id, content, createdAt, ...) exist but vary per model
};

export interface KelamPage {
  posts: KelamData[];
  nextCursor: string | null;
}

// ------------------------
// Per-model include + type examples
// ------------------------



// Hedis example (same pattern)
export function getHedisInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type HedisData = Prisma.HedisGetPayload<{
  include: ReturnType<typeof getHedisInclude>;
}>;

export interface HedisPage {
  items: HedisData[];
  nextCursor: string | null;
}
export function getFiqihInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type FiqihData = Prisma.FiqihGetPayload<{
  include: ReturnType<typeof getFiqihInclude>;
}>;

export interface FiqihPage {
  items: FiqihData[];
  nextCursor: string | null;
}

export function getDuaInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type DuaData = Prisma.DuaGetPayload<{
  include: ReturnType<typeof getDuaInclude>;
}>;

export interface DuaPage {
  items: DuaData[];
  nextCursor: string | null;
}
export function getXaneInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type XaneData = Prisma.XaneGetPayload<{
  include: ReturnType<typeof getXaneInclude>;
}>;

export interface XanePage {
  items: XaneData[];
  nextCursor: string | null;
}

// Dirok (history) example
export function getDirokInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type DirokData = Prisma.DirokGetPayload<{
  include: ReturnType<typeof getDirokInclude>;
}>;

export interface DirokPage {
  items: DirokData[];
  nextCursor: string | null;
}


// Dirok (history) example
export function getRojnameInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type RojnameData = Prisma.RojnameGetPayload<{
  include: ReturnType<typeof getRojnameInclude>;
}>;

export interface RojnamePage {
  items: RojnameData[];
  nextCursor: string | null;
}


// Dirok (history) example
export function getYekemInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type YekemData = Prisma.YekemGetPayload<{
  include: ReturnType<typeof getYekemInclude>;
}>;

export interface YekemPage {
  items: YekemData[];
  nextCursor: string | null;
}




// Dirok (history) example
export function getDuyemInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type DuyemData = Prisma.DuyemGetPayload<{
  include: ReturnType<typeof getDuyemInclude>;
}>;

export interface DuyemPage {
  items: DuyemData[];
  nextCursor: string | null;
}
export interface BookmarkInfo {
  isBookmarkedByUser: boolean;
}

export interface Attachment {
  file: File;
  mediaId?: string;
  url?: string;
  type?: string;
  isUploading: boolean;
}
