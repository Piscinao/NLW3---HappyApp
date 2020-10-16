import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Orphanage from './Orphanage';

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  // Parametro uma função retorna o orfanata, recebendo o orfanato qual é o campo que tem as imagens
  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id'})
  orphanage: Orphanage;

}
