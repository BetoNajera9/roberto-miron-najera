import { SetMetadata } from '@nestjs/common'

import { PrivilegesEnum } from '@auth/enums'

export const PublicAccess = () => SetMetadata(PrivilegesEnum.PUBLIC_KEY, true)
