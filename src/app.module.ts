import { Module } from '@nestjs/common'
import { ProductModule } from './modules'

@Module({
	imports: [ProductModule],
	controllers: [],
	providers: []
})
export class AppModule {}
