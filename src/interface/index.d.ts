type T_URL = string
type T_ISO_Time = string
type T_DBInfo = string

interface ICreateInfo {
    object: string
    id: string
}

interface ICover {
    type: string,
    file: {
        url: T_URL
    }
    external: {
        url: T_URL
    }
}

interface IParent {
    type: string
    database_id: T_DBInfo
}

interface IMultiSelect {
    id: string
    name: string
    color: string
}

interface IAnnotation {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
}

interface IWorkPeriodDate {
    start: string
    end: string
    time_zone: string
}

interface IUrl {
    id: string
    type: string
    url: string
}

interface IDescription {
    id: string
    type: string
    rich_text: [
        {
            type: string
            text: {
                content: string
                link: null | T_URL
            },
            annotations: IAnnotation
            plain_text: string
            href: null | T_URL
        }
    ]
}
interface IMulti {
    id: string
    type: string
    multi_select: IMultiSelect[]
}
interface IWorkPeriod {
    id: string
    type: string
    date: IWorkPeriodDate
}
interface IGithub {
    id: string
    type: string
    url: T_URL
}
interface IName {
    id: string
    type: string
    title: [
        {
            type: string
            text: {
                content: string
                link: null | T_URL
            },
            annotations: IAnnotation
            plain_text: string
            href: null | T_URL
        }
    ]
}

interface IProperties {
    url: IUrl
    description: IDescription
    tag: IMulti
    language: IMulti
    frameWork: IMulti
    workPeriod: IWorkPeriod
    github: IGithub
    database: IMulti
    deploy: IMulti
    contribute: IMulti
    name: IName
}

interface IResult {
    object: string
    id: string
    created_time: ISO_Time
    last_edited_time: ISO_Time
    created_by: ICreatedBy
    last_edited_by: ICreateInfo
    cover: ICover
    icon: null | any
    parent: IParent
    archived: boolean
    properties: IProperties
    url: T_URL
    public_url: null | T_URL
}

interface IPageOrDataBase {

}

interface INotionAPI {
    object: string
    results: IResult[]
    next_cursor: null | any
    has_more: boolean
    type: string
    page_or_database: IPageOrDataBase | any
    developer_survey: string
}

interface IErrorResponse {
    object: string
    status: number
    code: string
    message: string
    developer_survey: string
}