package praktikum.AIFB.PRIS.mapper;

import org.mapstruct.Mapper;
import praktikum.AIFB.PRIS.dto.StoreDto;
import praktikum.AIFB.PRIS.entity.RetailStore;

/**
 * This interface declares any required mapping method to map between store
 * entity and store DTO.
 * 
 * @author merti
 *
 */
@Mapper(componentModel = "spring", uses = { AddressMapper.class })
public interface StoreMapper {

  /**
   * Map store entity instance to store Dto instance.
   *
   * @param store entity store
   * @return dto store
   */
  StoreDto storeToStoreDto(RetailStore store);

  /**
   * Map store dto instance to store entity instance.
   *
   * @param store dto store
   * @return entity store
   */
  RetailStore storeDtoToStore(StoreDto store);

}